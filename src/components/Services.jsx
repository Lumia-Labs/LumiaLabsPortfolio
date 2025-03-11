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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: 1,

            }
        });

        images.forEach((img, i) => {
            if (images[i + 1]) {
                // Creates delay between sections
                // tl.to(img, { opacity: 0 }, "+=0.5")

                // This is one after the other without pause
                tl
                .to(img, { opacity: 0 })
                .to(images[i + 1], { opacity: 1 }, "<")
                .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
            }
        });

        // Adds pause at the end of the timeline
        // tl.to({}, {}, "+=0.5");
    }, []);

    return (
        <div className="service-section">
            <header
                className="services-header"
            >
                SERVICES
            </header>
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