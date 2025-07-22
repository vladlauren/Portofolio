'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import GarageModel from './GarageModel'
import { useResponsiveCamera} from "@/hooks/responsiveCameraWrapper";

function ResponsiveSceneWrapper({ children }: { children: React.ReactNode }) {
    useResponsiveCamera()
    return <>{children}</>
}

export default function Garage3D() {

    return (
        <div className={"w-full h-screen bg-black"} >
            <Canvas camera={{ fov: 70 }}>
                <ResponsiveSceneWrapper>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                    <GarageModel />
                </Suspense>
                </ResponsiveSceneWrapper>
            </Canvas>
        </div>
    )
}