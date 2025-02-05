import { Float, OrbitControls, OrthographicCamera, useGLTF, useFBX } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const LightbulbCanvas = () => {
    const lightbulb = useGLTF('/models/lightbulb/lightbulb.glb');
    // TODO: Fix glowing issue for alternate model to use in dark mode
    // const lightbulb = useFBX('../../public/lightbulb/lightbulb-glow.fbx');

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
                zoom={30}
                position={[4, 0, 20]}
            />
            <Float>
                <mesh rotation={[Math.PI / 4, 0, 0]}>
                    <primitive object={lightbulb.scene} scale={4} />
                </mesh>
            </Float>
        </Canvas>
    );
}

export default LightbulbCanvas;