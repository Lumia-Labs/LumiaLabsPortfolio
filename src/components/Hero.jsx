import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useErrorBoundary } from 'use-error-boundary';
import { SectionWrapper } from '../hoc';
import { lightbulb_bg } from '../assets';
import { LightbulbCanvas } from './canvas';
import './styles/hero.css';
import './styles/motion.css';
import { Canvas } from '@react-three/fiber';

const Hero = () => {
    const { ErrorBoundary, didCatch, error } = useErrorBoundary();
    const { scrollYProgress } = useScroll();

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
        >
            <div className="hero-text">
                <motion.header
                    className="hero-header"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Crafting <br />
                    Digital <br />
                    Brilliance <br />
                </motion.header>
                <motion.p
                    className="hero-body"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    At LumiaLabs we merge creativity, technology and strategy to deliver
                    cutting edge digital solutions. From intuitive interfaces and dynamic
                    web apps to robust enterprise platforms, we bring ideas to life across 
                    the digital landscape. Because true digital brilliance isn't just seen,
                    it's engineered.
                </motion.p>
            </div>
            <motion.div
                className="lightbulb-div select-no"
                style={{ 
                    opacity: useTransform(scrollYProgress, [0, 0.03], [1, 0])
                }}
            >
                <img
                    className="lightbulb-bg"
                    src={lightbulb_bg}
                    alt="lightbulb_bg"
                />
                <LightbulbCanvas />
            </motion.div>
        </motion.div>
    </section>
    );
}

export default SectionWrapper(Hero, "top");