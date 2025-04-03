import React, { useEffect } from 'react';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Float, OrthographicCamera, useGLTF } from '@react-three/drei';

const Icosahedron = () => {
    const lightbulb = useGLTF('./models/lightbulb/lightbulb.glb');

    return (
        <>
            {/* <OrthographicCamera
                makeDefault
                zoom={30}
                position={[4, 0, 20]}
            /> */}
            <Float>
                <mesh rotation={[0, 0, 0]}>
                    <primitive object={lightbulb.scene} />
                </mesh>
            </Float>
        </>
    )
};

export default function Scene() {
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [Math.PI / 4, degreesToRadians(270)]
    );
    const distance = useTransform(scrollYProgress, [0, 0.1], [5, 1]);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
        distance.get(),
        yAngle.get(),
        time.get() * 0
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <Icosahedron />
        </>
    );
    }