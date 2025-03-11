import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import TiltedCard from '../assets/reactbits/TiltedCard/TiltedCard';
import './styles/projects.css';

const Projects = () =>  {
    const projectRefs = useRef([]);

    return (
        <section className="projects-section">
            <div>
                <header className="projects-text projects-header">
                    PROJECTS
                </header>
                {projects.map((project, i) => {
                    // Create a ref for each project
                    const ref = useRef(null);
                    projectRefs.current[i] = ref;

                    // Individual scroll tracking for each project
                    const { scrollYProgress } = useScroll({
                        target: ref,
                        // offset: ["-300% end", "-150% start"],
                        offset: ["start end", "60vh start"]
                    });

                    // Apply animations based on each project's scroll progress
                    const projectOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
                    const textX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
                    const cardX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

                    return (
                        <motion.div
                            ref={ref}
                            key={project.id}
                            className="project-div"
                            style={{ opacity: projectOpacity }}
                        >
                            <motion.div
                                className="projects-text project-text"
                                style={{ translateX: textX }}
                            >
                                <h2 className="projects-h2">{project.name}</h2>
                                <h3 className="projects-h3">{project.features}</h3>
                                <div className="project-tag-div">
                                    {project.tags.map((tag) => (
                                        <p
                                            key={tag}
                                            className="project-tag-text"
                                            style={{
                                                color: `${project.color}`,
                                                backgroundColor: `${project.bg_color}`,
                                            }}
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                                <p className="projects-body">{project.overview}</p>
                            </motion.div>

                            <motion.div style={{ translateX: cardX }}>
                                <TiltedCard
                                    projectId={project.id}
                                    imageSrc={project.image}
                                    containerHeight="400px"
                                    containerWidth="400px"
                                    imageHeight="400px"
                                    imageWidth="400px"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.1}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
                <div style={{ marginTop: "10%" }}/>
            </div>
        </section>
    );
}

export default SectionWrapper(Projects, "projects");