import React, { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.sidemenu')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [menuOpen]);

    return (
        <div className="navbar">
            <div className="nav1">
                <div className="font-bold text-xl sm:text-2xl logo">
                    <a href="#">
                        Henil.
                    </a>
                </div>
                <div className="flex gap-4 sm:gap-6 justify-center items-center">
                    <ul className="hidden md:flex gap-4 lg:gap-6 menu">
                        <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                        <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
                        <li><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
                        <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                    </ul>

                    <div className="sidemenu">
                        <div className="sidemenu__toggle" onClick={() => setMenuOpen(true)}>
                            <Menu size={24} className="text-white hover:text-purple-400 transition-colors" />
                        </div>

                        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                            <div className="side-menu__list">
                                <X
                                    size={24}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white hover:text-purple-400 transition-colors cursor-pointer"
                                />
                                <ul className="space-y-4">
                                    <li><a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">About</a></li>
                                    <li><a href="#experience" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">Experience</a></li>
                                    <li><a href="#education" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">Education</a></li>
                                    <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">Skills</a></li>
                                    <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">Projects</a></li>
                                    <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar