import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export function useResponsiveCamera() {
    const { camera, size } = useThree()

    useEffect(() => {
        if (!camera) return

        const width = size.width
        let z = 9

        if (width < 600) z = 17 // mobile
        else if (width < 900) z = 8 // tablet
        else z = 7 // desktop

        camera.position.set(0, 0, z)
        camera.updateProjectionMatrix()
    }, [size, camera])
}