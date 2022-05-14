import { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../utilities/utilities"

import * as fp from "fingerpose"
import victory from "../images/victory.png"
import thumbs_up from "../images/thumb-up.png"

export default function TensorHand() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("on")
  const [camFace, setCamFace] = useState("environment")

  const videoConstraints = {
    facingMode: camFace,
  }

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null)
  const images = { thumbs_up: thumbs_up, victory: victory }

  ///////// NEW STUFF ADDED STATE HOOK
  const runHandpose = async () => {
    const net = await handpose.load()
    console.log("Handpose model loaded.")
    //  Loop and detect hands
    setInterval(() => {
      detect(net)
    }, 10)
  }

  const detect = async (net) => {
    // Check data is available
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)
      // console.log(hand)

      ///////// NEW STUFF ADDED GESTURE HANDLING
      const knownGestures = [fp.Gestures.VictoryGesture, fp.Gestures.ThumbsUpGesture]
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(knownGestures)
        const gesture = await GE.estimate(hand[0].landmarks, 5)
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures)
          let result = gesture.gestures.reduce((p, c) => {
            return p.score > c.score ? p : c
          })
          console.log(result)

          setEmoji(result.name)
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }

  useEffect(() => {
    runHandpose()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "80vw",
            height: "80vh",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "60vw",
            // height: "90vh"
          }}
        />
        <img
          src={images[emoji]}
          alt="The reaction"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            right: "10%",
            top: "10%",
            textAlign: "center",
            height: 100,
          }}
        />
      </header>
    </div>
  )
}
