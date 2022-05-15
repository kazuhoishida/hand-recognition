import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"

export default function Buttons() {
  const [isSnap, setIsSnap] = useAtom(isSnapAtom)
  const handleSnap = (i) => {
    setIsSnap(i + 1)
  }

  const activeStyle = "bg-white text-black"

  return (
    <div className="absolute top-0 left-0 z-10 flex justify-start items-center h-full ml-2">
      <ul className="grid gap-y-4 text-white">
        {[...Array(9)].map((a, i) => (
          <li
            key={i}
            className={`cursor-pointer px-16 border border-white text-20 font-bold even:translate-x-8 rounded-full tracking-wider hover:bg-white hover:text-black ${isSnap == i + 1 ? activeStyle : null}`}
            onMouseEnter={() => handleSnap(i)}
          >
            Finger {i + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}
