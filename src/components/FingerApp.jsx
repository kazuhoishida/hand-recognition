import { useCallback, useEffect, useRef } from "react"
import Webcam from "react-webcam"
import { Camera } from "@mediapipe/camera_utils"
import { Hands, Results } from "@mediapipe/hands"
import drawCanvas from "./DrawCanvas.jsx"
import useWindowSize from "../hooks/useWindowSize.jsx"
import ModelContainer from "./ModelContainer.jsx"

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
      maxNumHands: 1,
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

  return (
    <>
      <Webcam audio={false} className="invisible absolute" width={WINDOW_SIZE.width / 2 || 1440} height={WINDOW_SIZE.height || 900} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
      <div className="bg-[#683aff] h-screen w-full flex">
        <ModelContainer />
        <canvas ref={canvasRef} className="bg-white w-1/2 h-full" />
      </div>
    </>
  )
}
