import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Services, Projects, Members } from "./components";
import { Scene } from "./components/canvas";
import { Canvas } from "@react-three/fiber";
import PreloadAssets from "./components/PreloadAssets";

gsap.registerPlugin(ScrollTrigger);

//TODO: Fix scrolling issue when menu redirect to section
function App() {
    const containerRef = useRef(null);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if (!container) return;

    //     const height = container.clientHeight;
    //     document.body.style.height = `${height}px`;

    //     gsap.to(container, {
    //         y: -(height - window.innerHeight),
    //         ease: 'power1.out',
    //         scrollTrigger: {
    //             trigger: document.body,
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 1,
    //         }
    //     });
    // }, []);

    return (
        <BrowserRouter>
            <div id="viewport" className="no-select">
                <PreloadAssets />
                <Navbar />
                <Canvas style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}>
                    <Scene />
                </Canvas>
                <div id="scroll-container" ref={containerRef}>
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Members />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;