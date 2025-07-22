'use client'
import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function GarageModel() {
    const gltf = useGLTF('/models/garage/scene.gltf')
    const { actions } = useAnimations(gltf.animations, gltf.scene)

    useEffect(() => {
        const action = actions && actions[Object.keys(actions)[0]]
        if (action) {
            action.timeScale = 0.3 // 1 = normal, 0.5 = half speed, 2 = double speed
            action.play()
        }
    }, [actions])

    return (
        <primitive
            object={gltf.scene}
            scale={[6, 6, 6]}
            position={[0, -5, 0]}
        />
    )
}