import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AvatarCanvas } from "../../../components/canvas";
import "./TiltedCard.css";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 1,
};

export default function TiltedCard({
    projectId,
    imageSrc,
    bgColor,
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);

    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current || projectId !== 4) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    let display;
    if (projectId == 3) {
        display =
            <div style={{
                width: window.innerWidth <= 640 ? '350px' : imageWidth,
                height: window.innerWidth <= 640 ? '350px' : imageHeight,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto'
            }}>
                <AvatarCanvas
                    className="tilted-card-img"
                />
            </div>;
    }
    else {
        display =
            <motion.img
                src={imageSrc}
                className="tilted-card-img"
                style={{
                    width: window.innerWidth <= 640 ? '350px' : imageWidth,
                    height: window.innerWidth <= 640 ? '350px' : imageHeight,
                    rotateX: projectId === 4 ? rotateX : 0,
                    rotateY: projectId === 4 ? rotateY : 0,
                    position: 'relative',
                    zIndex: 2
                }}
            />;
    }

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="tilted-card-mobile-alert">
                    Hover to see more
                </div>
            )}
            <motion.div
                className="tilted-card-inner"
                style={{
                    scale,
                    backgroundColor: bgColor,
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    position: 'relative'
                }}
            >
                {display}
                {overlayContent && displayOverlayContent && (
                    <motion.div
                        className="tilted-card-overlay"
                        style={{
                            opacity,
                        }}
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>
        </figure>
    );
}