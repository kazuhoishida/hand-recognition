import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const ThreeGesture = new GestureDescription("3")

// thumb:
ThreeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9)
ThreeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
ThreeGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

// index:
ThreeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
ThreeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9)

// middle:
ThreeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
ThreeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9)

// ring:
ThreeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
ThreeGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)

// pinky:
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)
