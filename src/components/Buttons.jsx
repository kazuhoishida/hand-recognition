import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"

export default function Buttons() {
  const [isSnap, setIsSnap] = useAtom(isSnapAtom)
  const handleSnap = (i) => {
    setIsSnap(i + 1)
  }

  const activeStyle = "bg-white text-black"

  return (
    <div className="absolute top-0 left-0 z-10 flex justify-end items-center w-1/3 h-full">
      <ul className="grid gap-y-4">
        {[...Array(9)].map((a, i) => (
          <li
            key={i}
            className={`cursor-pointer px-16 border border-white text-20 text-white font-bold odd:-translate-x-8 even:translate-x-8 rounded-full tracking-wider hover:bg-white hover:text-black ${isSnap == i + 1 ? activeStyle : null}`}
            onMouseEnter={() => handleSnap(i)}
          >
            Level{i + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}
