import { Canvas } from "@react-three/fiber"
import FingerMesh from "./FingerMesh"
import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"

export default function FingerApp() {
  const [isSnap, setIsSnap] = useAtom(isSnapAtom)
  const handleSnap = (i) => {
    setIsSnap(i + 1)
  }

  return (
    <>
      <div className="bg-[#683aff] h-screen w-full">
        <Canvas className="absolute top-0 left-0 z-0">
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <FingerMesh scale={[20, 20, 20]} position={[0, -0.8, 0]} />
        </Canvas>
        <div className="absolute top-0 left-0 z-10 flex justify-end items-center w-1/3 h-full">
          <ul className="grid gap-y-4">
            {[...Array(9)].map((a, i) => (
              <li
                key={i}
                className="cursor-pointer px-16 border border-white text-20 text-white font-bold odd:-translate-x-8 even:translate-x-8 rounded-full tracking-wider hover:bg-white hover:text-black"
                onMouseEnter={() => handleSnap(i)}
              >
                Level{i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
