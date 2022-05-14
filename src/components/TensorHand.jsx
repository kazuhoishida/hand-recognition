import { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../utilities/utilities"
import * as fp from "fingerpose"
import useWindowSize from "../hooks/useWindowSize"
import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"
import { ThumbsUpGesture, ZeroGesture, OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture } from "../fingerpose/gestures"

export default function TensorHand() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const WINDOW_SIZE = useWindowSize()
  const [camState, setCamState] = useState("on")
  const [camFace, setCamFace] = useState("environment")
  const [isSnap, setIsSnap] = useAtom(isSnapAtom)
  const [isConfidence, setIsConfidence] = useState(0)
  const knownGestures = [ThumbsUpGesture, ZeroGesture, OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture]
  const CONFIDENCE = 8 // set confident above 80%

  const videoConstraints = {
    facingMode: camFace,
  }

  const runHandpose = async () => {
    const net = await handpose.load()
    setInterval(() => {
      detect(net)
    }, 100)
  }

  const detect = async (net) => {
    if (typeof webcamRef.current === "undefined" || webcamRef.current === null || webcamRef.current.video.readyState !== 4) return

    const video = webcamRef.current.video
    // Set video width
    webcamRef.current.video.width = WINDOW_SIZE.width / 2 || 1440
    webcamRef.current.video.height = WINDOW_SIZE.height || 900
    // Set canvas height and width
    canvasRef.current.width = WINDOW_SIZE.width / 2 || 1440
    canvasRef.current.height = WINDOW_SIZE.height || 900

    const hand = await net.estimateHands(video)

    if (hand.length > 0) {
      const GE = new fp.GestureEstimator(knownGestures)

      const gesture = await GE.estimate(hand[0].landmarks, CONFIDENCE)

      if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
        let result = gesture.gestures.reduce((p, c) => {
          return p.score > c.score ? p : c
        })
        setIsConfidence(Math.round(result.score * 100) / 10)
        setIsSnap(result.name)
      }
    } else {
      // reset if hand's out of camera
      setTimeout(() => {
        setIsConfidence(0.0)
        setIsSnap("wave 1")
      }, 1500)
    }

    // Draw mesh
    const ctx = canvasRef.current.getContext("2d")
    drawHand(hand, ctx)
  }

  useEffect(() => {
    runHandpose()
  }, [])

  return (
    <div className="relative w-1/2 h-full z-1">
      <Webcam ref={webcamRef} muted={true} className="absolute top-0 left-0" />
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
      <p className="absolute bottom-4 right-4 z-50 text-20">{isConfidence}%</p>
    </div>
  )
}
