import React from 'react'

// import all skill icons svgs
import bootstrap from '../assets/skill/bootstrap.svg';
import css from '../assets/skill/css.svg';
import cursor from '../assets/skill/cursor.svg';
import figma from '../assets/skill/figma.svg';
import framer from '../assets/skill/framer.svg';
import git from '../assets/skill/git.svg';
import github from '../assets/skill/github.svg';
import gsap1 from '../assets/skill/gsap.svg';
import html from '../assets/skill/html.svg';
import js from '../assets/skill/js.svg';
import mongo from '../assets/skill/mongo.svg';
import mysql from '../assets/skill/mysql.svg';
import nodejs from '../assets/skill/nodejs.svg';
import react from '../assets/skill/react.svg';
import render from '../assets/skill/render.svg';
import tailwind from '../assets/skill/tailwind.svg';
import vscode from '../assets/skill/vscode.svg';
import django from '../assets/skill/django.svg';
import java from '../assets/skill/java.svg';
import python from "../assets/skill/python.svg";
import express from '../assets/skill/express.svg';
// import express icon as express

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Skills = () => {

    const skills = [
        {
            title: "Frontend",
            list: [
                { name: "HTML", img: html },
                { name: "CSS", img: css },
                { name: "JavaScript", img: js },
                { name: "React", img: react },
                { name: "Tailwind CSS", img: tailwind },
                { name: "Bootstrap", img: bootstrap },
                { name: "Figma", img: figma },
                { name: "GSAP", img: gsap1 },
                { name: "Frammer Motion", img: framer },
            ]
        },
        {
            title: "Backend",
            list: [
                { name: "Node.js", img: nodejs },
                { name: "Express.js", img: express },
                { name: "Django", img: django },
            ]
        },
        {
            title: "Databases",
            list: [
                { name: "MongoDB", img: mongo },
                { name: "MySQL", img: mysql },
            ]
        },
        {
            title: "Tools & Platforms",
            list: [
                { name: "Git", img: git },
                { name: "GitHub", img: github },
                { name: "VS Code", img: vscode },
                { name: "Render", img: render },
                { name: "Cursor", img: cursor },
            ]
        },
        {
            title: "Extra",
            list: [
                { name: "Python", img: python },
                { name: "Java", img: java }
            ]
        }
    ]

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Animate main heading
        gsap.fromTo(".skill-heading",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".skill-section",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate subtitle text
        gsap.fromTo(".heading-text",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".skill-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate skill categories with stagger
        gsap.fromTo(".skill-category",
            {
                y: 80,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".skill-categories",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate category titles
        gsap.fromTo(".skill-category h3",
            {
                x: -30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".skill-category",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate skill icons with wave effect
        gsap.fromTo(".skill-icon",
            {
                scale: 0,
                opacity: 0,
                rotation: -180
            },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: {
                    amount: 0.8,
                    from: "start"
                },
                scrollTrigger: {
                    trigger: ".skill-category",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate icon wrappers separately for more control
        gsap.fromTo(".icon-wrapper",
            {
                scale: 0.8,
                backgroundColor: "#404040"
            },
            {
                scale: 1,
                backgroundColor: "#262626",
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.05,
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".skill-category",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate skill names
        gsap.fromTo(".skill-icon span",
            {
                y: 10,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.03,
                delay: 0.6,
                scrollTrigger: {
                    trigger: ".skill-category",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Enhanced hover animations for icon wrappers
        gsap.utils.toArray(".icon-wrapper").forEach((icon, index) => {
            const skillIcon = icon.closest('.skill-icon');
            const skillName = skillIcon.querySelector('span');

            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, {
                    y: -10,
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(skillName, {
                    scale: 1.05,
                    color: "#ffffff",
                    duration: 0.3,
                    ease: "power2.out"
                });

                // Add a subtle glow effect
                gsap.to(icon, {
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                    duration: 0.3
                });
            });

            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, {
                    y: 0,
                    scale: 1,
                    backgroundColor: "#262626",
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(skillName, {
                    scale: 1,
                    color: "#e5e5e5",
                    duration: 0.3,
                    ease: "power2.out"
                });

                // Remove glow effect
                gsap.to(icon, {
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    duration: 0.3
                });
            });
        });

        // Add a floating animation for icons (subtle continuous movement)
        gsap.utils.toArray(".icon-wrapper img").forEach((img, index) => {
            gsap.to(img, {
                y: -3,
                duration: 2 + (index % 3) * 0.5,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.1
            });
        });

        // Create a timeline for the entire section reveal
        const skillsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-section",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Add a subtle background pulse effect
        skillsTimeline.to(".skill-section", {
            backgroundColor: "#0a0a0a",
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        });

    }, []);


    return (
        <div className='skill-section w-full px-4 sm:px-6 lg:px-8 py-12 bg-black text-white' id='skills'>
            <h2 className="text-3xl font-bold skill-heading">My Skills</h2>
            <p className="text-gray-400 mb-16 text-lg heading-text">
                Technologies and tools I've worked with throughout my projects and experience
            </p>

            <div className="flex flex-col gap-12 skill-categories">
                {skills.map((category, i) => (
                    <div key={i} className="skill-category">
                        <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                        <div className="flex flex-wrap gap-6">
                            {category.list.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-icon flex flex-col items-center"
                                >
                                    <div className="icon-wrapper w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center shadow-md">
                                        <img src={skill.img} alt={skill.name} className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm mt-2 text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
