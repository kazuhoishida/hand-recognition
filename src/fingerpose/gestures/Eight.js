import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const EightGesture = new GestureDescription("8")

// thumb:
EightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
EightGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
EightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// other fingers
for (let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
  EightGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  EightGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9)
}

// middle
EightGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9)
EightGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9)
