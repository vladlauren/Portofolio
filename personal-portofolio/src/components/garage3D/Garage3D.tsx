'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import GarageModel from './GarageModel'
import {useResponsiveGarageLayout} from "@/hooks/responsiveGarageLayout";

export default function Garage3D() {
    const { modelScale, modelPosition} = useResponsiveGarageLayout()

    return (
        <div className={"w-full h-screen bg-black"} >
            <Canvas camera={{ fov: 90 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                        <GarageModel scale={modelScale} position={modelPosition}/>
                </Suspense>
            </Canvas>
        </div>
    )
}