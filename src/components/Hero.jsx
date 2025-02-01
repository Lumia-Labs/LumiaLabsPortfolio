import React from 'react'
import { Float, OrbitControls, OrthographicCamera, useGLTF, useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useErrorBoundary } from 'use-error-boundary'
import { lightbulb_bg } from '../assets'
import './styles/hero.css'
import './styles/motion.css'

const Hero = () => {
    const lightbulb = useGLTF('../../public/lightbulb/lightbulb.glb')
    // TODO: Fix glowing issue for alternate model to use in dark mode
    // const lightbulb = useFBX('../../public/lightbulb/lightbulb-glow.fbx')
    const { ErrorBoundary, didCatch, error } = useErrorBoundary()
    const { scrollYProgress } = useScroll()

    return didCatch ? (
        <div>{error.message}</div>
    ) : (
    // TODO: Allow users to only be able to highlight texts
    <section className="hero-section">
        <motion.div
            className="hero-div"
            //TODO: Show only when elements fully loaded
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "linear" } }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        >
            <div className="hero-text">
                <header className="hero-header">
                    Crafting <br />
                    Digital <br />
                    Brilliance <br />
                </header>
                <a className="select-no">
                    <br />
                </a>
                <p className="hero-body">
                    At LumiaLabs we merge creativity, technology and strategy to deliver
                    cutting edge digital solutions. From intuitive interfaces and dynamic
                    web apps to robust enterprise platforms, we bring ideas to life across 
                    the digital landscape. Because true digital brilliance isn't just seen,
                    it's engineered.
                </p>
            </div>
            <div className="lightbulb-div select-no">
                <img
                    className="lightbulb-bg"
                    src={lightbulb_bg}
                    alt="lightbulb_bg"
                />
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
            </div>
        </motion.div>
    </section>
    )
}

export default Hero