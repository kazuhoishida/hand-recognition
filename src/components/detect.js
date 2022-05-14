import * as fp from "fingerpose"
import { drawHand } from "../utilities/utilities"

export const detect = async (net, webcamRef, canvasRef, WINDOW_SIZE, knownGestures) => {
  if (typeof webcamRef.current === "undefined" || webcamRef.current === null || webcamRef.current.video.readyState !== 4) return ""

  const CONFIDENCE = 8 // set estimate confidence above 80%
  const video = webcamRef.current.video
  // Set video width
  webcamRef.current.video.width = WINDOW_SIZE.width / 2 || 1440
  webcamRef.current.video.height = WINDOW_SIZE.height || 900
  // Set canvas height and width
  canvasRef.current.width = WINDOW_SIZE.width / 2 || 1440
  canvasRef.current.height = WINDOW_SIZE.height || 900

  const hand = await net.estimateHands(video)

  // Draw mesh
  const ctx = canvasRef.current.getContext("2d")
  drawHand(hand, ctx)

  if (hand.length > 0) {
    const GE = new fp.GestureEstimator(knownGestures)

    const gesture = await GE.estimate(hand[0].landmarks, CONFIDENCE)

    if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
      let result = gesture.gestures.reduce((p, c) => {
        return p.score > c.score ? p : c
      })
      return result
    }
  }

  return ""
}
