import * as fp from "fingerpose"
import { drawHand } from "../utilities/utilities"
import { ThumbsUpGesture, ZeroGesture, OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture } from "../fingerpose/gestures"

export const detect = async (net, webcamRef, canvasRef) => {
  if (typeof webcamRef.current === "undefined" || webcamRef.current === null || webcamRef.current.video.readyState !== 4) return ""

  const WINDOW_SIZE = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const knownGestures = [ThumbsUpGesture, ZeroGesture, OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture]

  const CONFIDENCE = 7 // set estimate confidence above 70%
  const video = webcamRef.current.video
  const hand = await net.estimateHands(video)

  // Draw hand mesh on canvas
  const ctx = canvasRef.current.getContext("2d")
  drawHand(hand, ctx, WINDOW_SIZE)

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
