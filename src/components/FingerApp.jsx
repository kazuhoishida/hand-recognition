import { Canvas } from "@react-three/fiber"
import FingerMesh from "./FingerMesh"
import Buttons from "./Buttons"

export default function FingerApp() {
  return (
    <>
      <div className="bg-[#683aff] h-screen w-full">
        <Canvas className="absolute top-0 left-0 z-0">
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <FingerMesh scale={[20, 20, 20]} position={[0, -0.8, 0]} />
        </Canvas>
        <Buttons />
      </div>
    </>
  )
}
