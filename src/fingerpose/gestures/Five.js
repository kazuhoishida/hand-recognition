import { Finger, FingerCurl, FingerDirection } from "../FingerDescription"
import GestureDescription from "../GestureDescription"

const FiveGesture = new GestureDescription("5")

// no finger should be curled
for (let finger of Finger.all) {
  FiveGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

export default FiveGesture
