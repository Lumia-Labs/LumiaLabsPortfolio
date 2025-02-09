import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import './styles/services.css';

const Services = () => {
    return (
        <section
            className="services-section"
        >
            <div>
                <header
                    className="services-text services-header"
                >
                    SERVICES
                </header>
                <div className="services-div">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ y: 200 }}
                            whileInView={{ y: 0, transition: { duration: 0.2 } }}
                            style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), center / cover no-repeat " + `url(${service.image})` }}
                        >
                            <div className="service-text">
                                <h2 className="service-h2">
                                    {service.name}
                                </h2>
                                <p className="service-body">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(Services, 'services');