import { SectionWrapper } from '../hoc';
import { motion, useScroll, useTransform } from 'framer-motion';
import Waves from '../assets/reactbits/Waves/Waves';
import './styles/about.css';

const About = () => {
    const { scrollYProgress } = useScroll();

    return (
        <section className="about-section">
                <Waves
                    className="about-bg no-select"
                    lineColor="rgba(255, 255, 255, 0.3)"
                    backgroundColor="rgba(0, 0, 0, 1)"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={20}
                />
            <div className="about-div">
                <motion.header
                    className="about-text about-header"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    ABOUT
                </motion.header>
                <motion.div
                    className="about-box about-box-left"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="about-text about-h2">
                        WHO WE ARE
                    </h2>
                    <p className="about-text about-body">
                        We are a passionate team of developers dedicated to crafting
                        high-performance software solutions. With expertise spanning multiple
                        technologies, we specialize in building scalable applications, optimizing
                        system performance, and delivering innovative tech solutions tailored to
                        diverse industries. Whether it's mobile, web, backend, or emerging
                        technologies, we bring creativity and precision to every project.
                    </p>
                </motion.div>
                <motion.div
                    className="about-box about-box-right"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="about-text about-h2">
                        OUR EXPERTISE
                    </h2>
                    <p className="about-text about-body">
                        From mobile app development to full-stack web applications, we excel in
                        a wide range of technologies. Our mobile expertise includes Kotlin, Java,
                        Swift, Flutter, and React Native, ensuring seamless native and
                        cross-platform experiences. On the web, we harness React, Vue, Angular,
                        and modern backend frameworks like Node.js, Django, and Ruby on Rails to
                        build powerful, scalable systems. Our database and full-stack architecture
                        skills allow us to create efficient, data-driven applications tailored to
                        business needs.
                    </p>
                </motion.div>
                <motion.div
                    className="about-box about-box-left"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="about-text about-h2">
                        INNOVATION & EMERGING TECH
                    </h2>
                    <p className="about-text about-body">
                        Beyond traditional development, we push boundaries with AI, cybersecurity,
                        and blockchain. Our AI expertise spans machine learning, NLP, and data
                        analytics, optimizing models for real-world applications. We ensure security
                        through penetration testing, secure coding, and blockchain security audits.
                        In the Web3 space, we develop smart contracts, NFT marketplaces, and DeFi
                        protocols, shaping the future of decentralized applications.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default SectionWrapper(About, "about");