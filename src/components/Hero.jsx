import { Environment, Float, OrbitControls, OrthographicCamera, useGLTF, useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { useErrorBoundary } from 'use-error-boundary'
import { lightbulb_bg } from '../assets'
import './styles/hero.css'
import './styles/motion.css'

const Hero = () => {
    const lightbulb = useGLTF('../../public/lightbulb/lightbulb.glb')
    // const lightbulb = useFBX('../../public/lightbulb/lightbulb-glow.fbx')
    // const { ErrorBoundary, didCatch, error } = useErrorBoundary()

    return (
    // didCatch ? (
    //     <div>{error.message}</div>
    // ) : 
    // (\
    <section className="hero-section fade-in-2s">
        <div className="hero-div">
            <div className="hero-text">
                <header className="hero-header">
                    Crafting <br />
                    Digital <br />
                    Brilliance <br />
                </header>
                <p className="hero-body">
                    <br />
                    At LumiaLabs we merge creativity, technology and strategy to deliver
                    cutting edge digital solutions. From intuitive interfaces and dynamic
                    web apps to robust enterprise platforms, we bring ideas to life across 
                    the digital landscape. Because true digital brilliance isn't just seen,
                    it's engineered.
                </p>
            </div>
            <div className="lightbulb-div">
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
        </div>
    </section>
    )
}

export default Hero