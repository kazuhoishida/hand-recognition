import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const SevenGesture = new GestureDescription("7")

// thumb:
SevenGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
SevenGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
SevenGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Pinky]) {
  SevenGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  SevenGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9)
}

// ring
SevenGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)
SevenGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)
