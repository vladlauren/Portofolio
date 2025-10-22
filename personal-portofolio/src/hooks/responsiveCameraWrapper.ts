import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export function useResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!camera) return;

    const aspect = size.width / size.height;

    let z = 9;

    if (size.width < 600) {
      z = 9;
    } else if (size.width < 900) {
      z = 9;
    } else {
      z = 9;
    }

    camera.position.set(0, 0, z);
    camera.lookAt(0, 0, 0); // always look at center
    camera.updateProjectionMatrix();
  }, [size, camera]);
}
