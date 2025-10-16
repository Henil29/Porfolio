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
        <nav className="sticky top-0 z-50 w-full h-[70px] backdrop-blur-lg bg-white/0 select-none">
            <div className="mx-auto flex items-center justify-between h-full gap-5 md:gap-12 px-5 md:px-[50px] xl:px-[250px]">
                <div className="logo font-bold text-xl sm:text-2xl">
                    <a href="#">Henil.</a>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                    <ul className="menu hidden md:flex gap-4 lg:gap-6">
                        <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                        <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
                        <li><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
                        <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                    </ul>

                    {/* Mobile menu */}
                    <div className="sidemenu md:hidden">
                        <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="p-2 rounded hover:bg-white/10">
                            <Menu size={24} className="text-white" />
                        </button>

                        {/* Overlay */}
                        <div
                            className={`${menuOpen ? 'fixed inset-0 bg-black/50 z-[90]' : 'hidden'}`}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <div
                            className={`fixed top-0 right-0 h-screen w-full max-w-[300px] bg-black/90 text-white p-8 transition-transform duration-300 z-[100] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        >
                            <div className="flex flex-col gap-6 mt-2">
                                <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="self-end p-2 rounded hover:bg-white/10">
                                    <X size={24} className="text-white" />
                                </button>
                                <ul className="space-y-4 text-lg">
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
        </nav>
    )
}

export default Navbar