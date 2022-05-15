import { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import * as fp from "fingerpose"
import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"
import { detect } from "./detect"

export default function TensorHand() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [camFace, setCamFace] = useState("environment")
  const [isSnap, setIsSnap] = useAtom(isSnapAtom)
  const [isConfidence, setIsConfidence] = useState(0)

  const videoConstraints = {
    width: window.innerWidth / 2,
    height: window.innerHeight,
    facingMode: camFace,
    audio: false,
  }

  const runHandpose = async () => {
    const net = await handpose.load()
    setInterval(() => {
      detectPlayerGesture(50, net)
    }, 50)
  }

  function detectPlayerGesture(requiredDuration, net) {
    let lastGesture = ""
    let gestureDuration = 0

    const predictNonblocking = () => {
      setTimeout(() => {
        const predictionStartTS = Date.now()

        detect(net, webcamRef, canvasRef).then((playerGesture) => {
          const confidenceRate = Math.round(playerGesture.score * 100) / 10 || 0.0
          setIsConfidence(confidenceRate)

          if (playerGesture == "") {
            lastGesture = ""
            gestureDuration = 0
          }

          if (playerGesture.name === lastGesture) {
            // player keeps holding the same gesture
            // -> keep timer running
            const deltaTime = Date.now() - predictionStartTS
            gestureDuration += deltaTime
          } else {
            // detected a different gesture
            // -> reset timer
            lastGesture = playerGesture.name
            gestureDuration = 0
          }

          if (gestureDuration < requiredDuration) {
            // update timer and repeat
            predictNonblocking()
          } else {
            // player result available
            // -> stop timer and check winner
            setIsSnap(lastGesture)
          }
        })
      }, 0) // in order to prevent block rendering
    }

    predictNonblocking()
  }

  useEffect(() => {
    runHandpose()
  }, [])

  return (
    <div className="relative w-1/2 h-full z-1">
      <Webcam ref={webcamRef} muted={true} videoConstraints={videoConstraints} width={window.innerWidth / 2} height={window.innerHeight} className="absolute top-0 left-0 grayscale" style={{ transform: "rotateY(180deg)" }} />
      <canvas ref={canvasRef} width={window.innerWidth / 2} height={window.innerHeight} className="absolute top-0 left-0" style={{ transform: "rotateY(180deg)" }} />
      <p className="absolute bottom-4 right-4 z-50 text-20">{isConfidence}%</p>
    </div>
  )
}
