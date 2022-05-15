import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const SixGesture = new GestureDescription("6")

// thumb:
SixGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
SixGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
SixGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  SixGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  SixGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9)
}

// pinky
SixGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)
SixGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)
