import { Float, OrbitControls, OrthographicCamera, useGLTF, useFBX } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { useSpring } from 'framer-motion';

const CameraController = ({ cameraValues }) => {
    const { camera } = useThree();
    const springConfig = { mass: 1, tension: 170, friction: 26 };
    
    const zoom = useSpring(cameraValues.zoom, springConfig);
    const positionX = useSpring(cameraValues.position[0], springConfig);
    const positionY = useSpring(cameraValues.position[1], springConfig);
    const positionZ = useSpring(cameraValues.position[2], springConfig);

    useEffect(() => {
        camera.zoom = zoom.get();
        camera.position.x = positionX.get();
        camera.position.y = positionY.get();
        camera.position.z = positionZ.get();
        camera.updateProjectionMatrix();
    }, [camera, zoom, positionX, positionY, positionZ]);

    return null;
};

const LightbulbCanvas = () => {
    const lightbulb = useGLTF('/LumiaLabsPortfolio/models/lightbulb/lightbulb.glb');
    
    // Calculate responsive camera values
    const getCameraValues = () => {
        const width = window.innerWidth;
        if (width <= 640) {
            return {
                zoom: width * 0.065,
                position: [2, 0, 15]
            };
        } else if (width <= 1024) {
            return {
                zoom: width * 0.02,
                position: [3, 0, 17]
            };
        } else {
            return {
                zoom: width * 0.02,
                position: [4, 0, 20]
            };
        }
    };

    // Set initial camera values based on window width
    const [cameraValues, setCameraValues] = useState(getCameraValues());

    useEffect(() => {
        const handleResize = () => {
            setCameraValues(getCameraValues());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = window.innerWidth <= 640;
    const modelScale = isMobile ? 2.5 : 4;
    // TODO: Fix glowing issue for alternate model to use in dark mode
    // const lightbulb = useFBX('/LumiaLabsPortfolio/models/lightbulb/lightbulb-glow.fbx');

    return (
        <Canvas
            frameloop="always"
        >
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
            />
            <OrthographicCamera
                makeDefault
                zoom={cameraValues.zoom}
                position={cameraValues.position}
            />
            <CameraController cameraValues={cameraValues} />
            <Float>
                <mesh rotation={[Math.PI / 4, 0, 0]}>
                    <primitive object={lightbulb.scene} scale={modelScale} />
                </mesh>
            </Float>
        </Canvas>
    );
}

export default LightbulbCanvas;