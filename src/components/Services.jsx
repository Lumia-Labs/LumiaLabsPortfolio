import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import './styles/services.css';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useEffect(() => {
        const images = gsap.utils.toArray(".left-content img");
        const rightElements = gsap.utils.toArray(".right-content .service-text");
        const isMobile = window.innerWidth <= 640;

        // Dynamic scroll length based on number of services
        const scrollLength = services.length * 1000; // Increased to 1000px per service for smoother transitions

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: `+=${scrollLength}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                pinSpacing: true,
                fastScrollEnd: true,
                preventOverlaps: true
            }
        });

        // Set initial state for mobile
        if (isMobile) {
            images.forEach((img, i) => {
                if (i > 0) {
                    gsap.set(img, { opacity: 0 });
                }
            });
        }

        images.forEach((img, i) => {
            if (images[i + 1]) {
                tl
                .to(img, { opacity: 0, duration: 0.5 })
                .to(images[i + 1], { opacity: 1, duration: 0.5 }, "<")
                .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none", duration: 0.5 }, "<");
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="service-section">
            <motion.header
                className="services-header"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                SERVICES
            </motion.header>
            <div className="container">
                <div className="left-container">
                    <div className="left-content">
                        {services.map((service) => (
                            <img
                                key={service.id}
                                src={service.image}
                                alt={service.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-content">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="service-text"
                            >
                                <h2 className="service-h2 yes-select">
                                    {service.name}
                                </h2>
                                <br /><br />
                                <p className="service-body yes-select">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Services, 'services');