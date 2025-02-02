import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import TiltedCard from '../../public/reactbits/TiltedCard/TiltedCard';
import './styles/projects.css';

const Projects = () =>  {
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })

    return (
        <section className="projects-section">
            <div>
                <header className="projects-text projects-header">
                    PROJECTS
                </header>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-div"
                        style={{ opacity: useTransform(scrollYProgress, [project.start_scroll_pos, project.end_scroll_pos], [0, 1]) }}
                    >
                        <motion.div
                            className="projects-text project-text"
                            style={{ translateX: useTransform(scrollYProgress, [project.start_scroll_pos, project.end_scroll_pos], [-100, 0]) }}
                        >
                            <h2 className="projects-h2">
                                {project.name}
                            </h2>
                            <h3 className="projects-h3">
                                {project.features}
                            </h3>
                            <div className="project-tag-div">
                                {project.tags.map((tag) => (
                                    <p key={tag} className="project-tag-text" style={{ color: `${project.color}`, backgroundColor: `${project.bg_color}` }}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            <p className="projects-body">
                                {project.overview}
                            </p>
                        </motion.div>
                        <motion.div style={{ translateX: useTransform(scrollYProgress, [project.start_scroll_pos, project.end_scroll_pos], [100, 0]) }}>
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
                ))}
            </div>
        </section>
    );
}

export default SectionWrapper(Projects, "projects");