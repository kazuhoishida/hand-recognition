import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const FourGesture = new GestureDescription("4")

// thumb:
FourGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
FourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
FourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// index:
FourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9)

// other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FourGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  FourGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}
