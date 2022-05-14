import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const FourGesture = new GestureDescription("4")

// thumb:
FourGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
FourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
FourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
// FourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

// index:
FourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0)
FourGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0)

// middle:
FourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
FourGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)

// ring:
FourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
FourGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0)

// pinky:
FourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
FourGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0)

export default FourGesture
