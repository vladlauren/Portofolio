import { useMemo } from "react";
import { useViewportSize } from "./useViewportSize";

type Layout = {
    modelScale: [number, number, number];
    modelPosition: [number, number, number];
    cameraZ: number;
    cameraFov: number;
    cameraY: number;
};

export function useResponsiveGarageLayout(): Layout {
    const { width, height } = useViewportSize();
    const aspect = width && height ? width / height : 16 / 9;






    return useMemo<Layout>(() => {
        // Defaults (desktop)
        let modelScale: [number, number, number] = [9.3, 5.4, 7.5];
        let modelPosition: [number, number, number] = [0, -4.6, 0];
        let cameraZ = 8.5;
        let cameraFov = 58;
        let cameraY = 0.2;

        if (width < 600) {
            // Mobile
            modelScale = [2, 5.3, 11];
            modelPosition = [0, -4.5, 0];
            cameraZ = aspect < 0.55 ? 18 : 16; // very tall phones need more Z
            cameraFov = 58;
            cameraY = 1.3;
        } else if (width < 900) {
            // Tablet
            modelScale = [7.4, 6.8, 6.8];
            modelPosition = [0, -4.3, 0];
            cameraZ = 11;
            cameraFov = 60;
            cameraY = 0.8;
        }

        return { modelScale, modelPosition, cameraZ, cameraFov, cameraY };
    }, [width, height, aspect]);
}
