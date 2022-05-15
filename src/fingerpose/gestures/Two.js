import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const TwoGesture = new GestureDescription("2")

// thumb:
TwoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8)
TwoGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// index:
TwoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
TwoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)

// middle:
TwoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
TwoGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
TwoGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9)

// ring:
TwoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)

// pinky:
TwoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

export default TwoGesture
