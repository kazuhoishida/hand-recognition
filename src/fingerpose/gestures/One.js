import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

export const OneGesture = new GestureDescription("1")

// thumb:
OneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
OneGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)

// index:
OneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
OneGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9)
OneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
OneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9)
OneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9)

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OneGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  OneGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}
