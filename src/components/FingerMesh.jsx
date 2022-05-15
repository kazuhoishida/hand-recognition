import { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import FingerModel from "../models/rigget_V16.glb"
import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"
import { gsap } from "gsap"

export default function FingerMesh({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(FingerModel)
  const { actions } = useAnimations(animations, group)

  const [isSnap, setIsSnap] = useAtom(isSnapAtom)

  useEffect(() => {
    // because there's no data for 0
    if (isSnap === "0") {
      actions["wave 1"]?.reset().fadeIn(0.5).play()
      return () => void actions["wave 1"]?.fadeOut(0.5)
    }

    actions[isSnap]?.reset().fadeIn(0.5).play()
    return () => void actions[isSnap]?.fadeOut(0.5)
  }, [isSnap])

  useEffect(() => {
    // if isSnap is a number, them slightly change the position of hand model
    if (!isNaN(isSnap)) {
      gsap.to(group.current.position, {
        y: -0.4 * isSnap + 1.5,
        duration: 0.5,
      })
    }
  }, [isSnap])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <primitive object={nodes.rHand} />
          <group name="Palms_Up_Together_Emoji_1" position={[-0.04, -0.06, -0.01]} scale={0.67}>
            <skinnedMesh name="Palms_Up_Together_Emoji_1_2" geometry={nodes.Palms_Up_Together_Emoji_1_2.geometry} material={materials.DefaultMaterial} skeleton={nodes.Palms_Up_Together_Emoji_1_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(FingerModel)
