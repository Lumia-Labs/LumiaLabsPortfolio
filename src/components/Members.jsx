import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { members } from "../constants";
import './styles/members.css';

const Members = () => {
    const shuffleArray = arr => [...arr].sort(() => Math.random() - 0.5);
    const shuffledMembers = shuffleArray(members);

    // const [myStyle, setMyStyle] = useState({});
    // const changeStyle = (id) => {
    //     setMyStyle((prevState) => ({
    //         ...myStyle,
    //         [id]: !prevState[id]
    //     }));
    // };

    //TODO: Add click event to expand image and show bio
    return (
        <section className="members-section">
            <div className="members-container">
                <header className="members-header">
                    MEMBERS
                </header>
                <div className="members-gallery">
                    {shuffledMembers.map((member, i) => (
                        <motion.div
                            key={member.id}
                            className="member-card"
                            style={{ marginTop: Math.floor(Math.random() * 10)+"%" }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 * (i) } }}
                        >
                            <motion.img
                                src={member.image}
                                className="member-img"
                                // className={myStyle[`${i}`] ? "member-img-expanded" : "member-img"}
                                // onClick={() => changeStyle(i)}
                            />
                            <p className="member-description">
                                {member.name.toUpperCase()} <br />
                                {member.title.toUpperCase()}
                            </p>
                            <div
                                // className={myStyle[`${i}`] ? "img-overlay" : "img-overlay-hidden"}
                            >
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(Members, "members");