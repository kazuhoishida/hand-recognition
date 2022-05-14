import ModelContainer from "./ModelContainer.jsx"
import TensorHand from "./TensorHand.jsx"

export default function FingerApp() {
  return (
    <div className="bg-[#683aff] h-screen w-full flex">
      <ModelContainer />
      <TensorHand />
    </div>
  )
}
