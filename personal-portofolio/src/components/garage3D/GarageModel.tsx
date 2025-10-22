'use client'
import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

type GarageModelProps = {
    scale?: [number, number, number]
    position?: [number, number, number]
}

export default function GarageModel({scale, position}:GarageModelProps ){
    const gltf = useGLTF('/models/garage/scene.gltf')
    const { actions, names } = useAnimations(gltf.animations, gltf.scene)

    useEffect(() => {
        if (!actions || names.length === 0) return

        // If you know the action name, replace with it (e.g. 'DoorAction')
        const actionName = names[0]
        const action = actions[actionName]
        if (!action) return

        // Play once and hold the final frame
        action.reset()
        action.setLoop(THREE.LoopOnce, 1)
        action.clampWhenFinished = true

        // Reverse the clip so it goes bottom -> top
        // Important: set time to end of clip, then use a negative timeScale
        const clip = gltf.animations.find(a => a.name === actionName)
        if (clip) action.time = clip.duration

        action.timeScale = -0.6 // adjust speed (abs value); negative = reverse
        action.play()

        // Optional cleanup
        return () => {
            action.stop()
        }
    }, [actions, names, gltf.animations])

    return (
        <primitive
            object={gltf.scene}
            scale={scale}
            position={position}
        />
    )
}