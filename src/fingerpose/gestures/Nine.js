import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const NineGesture = new GestureDescription("9")

// thumb:
NineGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
NineGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
NineGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// other fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  NineGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  NineGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9)
}

// index
NineGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9)
NineGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9)
