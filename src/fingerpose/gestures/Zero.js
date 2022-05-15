import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

// describe gesture ✊️
export const ZeroGesture = new GestureDescription("0")

// thumb: half curled
// accept no curl with a bit lower confidence
ZeroGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
ZeroGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ZeroGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ZeroGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}
