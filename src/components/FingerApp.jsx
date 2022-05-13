import { useCallback, useEffect, useRef } from "react"
import Webcam from "react-webcam"
import { Camera } from "@mediapipe/camera_utils"
import { Hands, Results } from "@mediapipe/hands"
import drawCanvas from "./DrawCanvas.jsx"
import { Canvas } from "@react-three/fiber"
import FingerMesh from "./FingerMesh"
import Buttons from "./Buttons"
import useWindowSize from "../hooks/useWindowSize.jsx"

export default function FingerApp() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const resultsRef = useRef(null)
  const WINDOW_SIZE = useWindowSize()

  const onResults = useCallback((results) => {
    resultsRef.current = results

    const canvasCtx = canvasRef.current.getContext("2d")
    drawCanvas(canvasCtx, results)
  }, [])

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      },
    })

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    hands.onResults(onResults)

    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current.video })
        },
        width: WINDOW_SIZE.width / 2 || 1440,
        height: WINDOW_SIZE.height || 900,
      })
      camera.start()
    }
  }, [onResults])

  const videoConstraints = {
    width: WINDOW_SIZE.width / 2 || 1440,
    height: WINDOW_SIZE.height || 900,
    facingMode: "user",
  }

  /** 検出結果をconsoleに出力する */
  const OutputData = () => {
    const results = resultsRef.current
    console.log(results.multiHandLandmarks)
  }
  return (
    <>
      <Webcam audio={false} className="invisible absolute" width={WINDOW_SIZE.width / 2 || 1440} height={WINDOW_SIZE.height || 900} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
      <div className="bg-[#683aff] h-screen w-full flex">
        <div className="w-1/2">
          <Canvas className="absolute top-0 left-0 z-0">
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <FingerMesh scale={[20, 20, 20]} position={[0, -0.8, 0]} />
          </Canvas>
          <Buttons />
        </div>
        <div className="w-1/2">
          <canvas ref={canvasRef} className="bg-white w-full h-full" />
        </div>
      </div>
    </>
  )
}
