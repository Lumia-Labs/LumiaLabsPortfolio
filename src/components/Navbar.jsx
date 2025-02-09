import { useState } from 'react';
import { navLinks, navLinksSmall } from '../constants';
import { logo, menu, close } from '../assets';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/navbar.css';

const Navbar = () => {
    const [, setActive] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav>
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <div>
                        <motion.section
                            className="menu-card"
                            initial={{ transform: "scale(0.9)", opacity: 0 }}
                            animate={{
                                transform: "scale(1)",
                                opacity: 1,
                                transition: { duration: 0.25 }
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.5 } 
                            }}
                            transition={{ ease: [0, 0.71, 0.2, 1.01] }}
                        />
                        <motion.ul
                            className="menu-text-section no-bullets"
                            initial={{ x: 0, opacity: 0 }}
                            animate={{
                                x: 100,
                                opacity: 1,
                                transition: { duration: 0.25 }
                            }}
                            exit={{
                                x: 0,
                                opacity: 0,
                                transition: { duration: 0.25 } 
                            }}
                            transition={{ ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setActive(link.title)
                                    }}
                                >
                                    <a
                                        className="menu-text menu-main-text"
                                        href={`${link.id}`}    
                                    >
                                        {link.title}
                                    </a>
                                    <a>
                                        <br /><br />
                                    </a>
                                </li>
                            ))}
                            <a className="select-no">
                                <br />
                            </a>
                            {navLinksSmall.map((link) => (
                                <li
                                    key={link.id}
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setActive(link.title)
                                    }}
                                >
                                    <a
                                        className="menu-text menu-sub-text"
                                        href={`${link.id}`}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                )}
            </AnimatePresence>
            {/* TODO: Hover lights up bulb and light rays will rotate */}
            <a href="/">
                <img
                    className="logo select-no"
                    src={logo}
                    alt="logo"
                />
            </a>
            {/* TODO: Animate icons on menu clicks */}
            <button
                className="menu-button select-no"
                onClick={toggleMenu}
                align="left"
            >
                <img
                    src={isMenuOpen ? close : menu}
                    alt="menu"
                />
            </button>
        </nav>
    );
}

export default Navbar;