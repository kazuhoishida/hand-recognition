import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const OneGesture = new GestureDescription("1")

// thumb:
OneGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)
OneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
OneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

// index:
OneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0)

// middle:
OneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
OneGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9)

// ring:
OneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
OneGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)

// pinky:
OneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
OneGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)

export default OneGesture
