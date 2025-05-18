import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload, useAnimations, useFBX, useGLTF } from "@react-three/drei";

export function Avatar(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/LumiaLabsPortfolio/models/avatar/avatar.glb");
    const { animation } = props;
    const { animations: typingAnimation } = useFBX("/LumiaLabsPortfolio/models/avatar/typing.fbx");
    typingAnimation[0].name = "Typing";
    const { actions } = useAnimations([typingAnimation[0]], group);

    useEffect(() => {
        actions[animation].play();
    })

    return (
        <group {...props} ref={group} dispose={null}>
            <group>
                <primitive object={nodes.Hips} />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                    material={materials.Wolf3D_Outfit_Bottom}
                    skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                    frustumCulled={false}
                />
                <skinnedMesh
                  geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Hair.geometry}
                    material={materials.Wolf3D_Hair}
                    skeleton={nodes.Wolf3D_Hair.skeleton}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.EyeLeft.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeLeft.skeleton}
                    morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.EyeRight.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeRight.skeleton}
                    morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Head.geometry}
                    material={materials.Wolf3D_Skin}
                    skeleton={nodes.Wolf3D_Head.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                    frustumCulled={false}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Teeth.geometry}
                    material={materials.Wolf3D_Teeth}
                    skeleton={nodes.Wolf3D_Teeth.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                    frustumCulled={false}
                />
            </group>
        </group>
    );
}

const AvatarCanvas = () => {
    const isMobile = window.innerWidth <= 640;
    const size = isMobile ? 350 : 400;

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [1, 1, 3.5], fov: 35 }}
            gl={{ preserveDrawingBuffer: true }}
            style={{ 
                borderRadius: '15px',
                width: `${size}px`,
                height: `${size}px`
            }}
        >
            <color attach="background" args={["#FAF1E4"]} />
            <Environment preset="lobby" />
            <group>
                <mesh
                    scale={2}
                    position={[0.2, -1.7, 0]}
                >
                    <pointLight intensity={1} position={[0, 1.15, 0.65]} />
                    <Avatar animation={"Typing"}/>
                    <mesh scale={[0.5, 0.5, 0.5]} position-y={0.21}>
                        <boxGeometry />
                        <meshStandardMaterial color="#7F7B61" />
                    </mesh>
                </mesh>
            </group>
            <Preload all />
        </Canvas>
    );
}

export default AvatarCanvas;