import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const FourGesture = new GestureDescription("4")

// thumb:
FourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
FourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
FourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

// index:
FourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0)

// middle:
FourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
FourGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
FourGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9)

// ring:
FourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
FourGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
FourGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)

// pinky:
FourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
FourGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
FourGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)

export default FourGesture
