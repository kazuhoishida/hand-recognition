import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const ThreeGesture = new GestureDescription("3")

// thumb:
ThreeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

// index:
ThreeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
ThreeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
ThreeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)

// middle:
ThreeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
ThreeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0)
ThreeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0)

// ring:
ThreeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
ThreeGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)
// ThreeGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.5)

// pinky:
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)
// ThreeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.5)

export default ThreeGesture
