import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
    const containerRef = useRef(null);

    const experience = [
        {
            type: "Full Stack Developer Intern",
            company: "MERU FinTech",
            date: "Aug 2025- Present",
            description: [
                "Contributing to the development of scalable web applications using React.js, Node.js/Express, and MongoDB.",
                "Built and optimized REST APIs to support financial workflows.",
                "Implemented secure authentication and authorization for users.",
                "Worked with third-party APIs to integrate payment and fintech-related features.",
                "Improved performance and user experience through responsive UI with Tailwind CSS."
            ],
            skill: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL", "Git", "Postman"]
        },
        {
            type: "Self Experience (Personal Projects / Freelance)",
            company: "MERN Stack Developer (Self Projects)",
            date: "2024 - Present",
            description: [
                "Built E-commerce app with cart, checkout & authentication.",
                "Developed a Social Media app with posts, likes, comments, and follow/unfollow.",
                "Explored Cloud & Deployment (Vercel, Render, Netlify, MongoDB Atlas)."
            ],
            skill: ["HTML", "CSS", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "React", "MongoDB", "Mongoose", "MySQL", "Git", "GitHub", "Postman", "Netlify", "Render", "Figma", "GSAP animation", "Motion Animation"]
        }
    ]

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.utils.toArray(".card").forEach((card) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",   // when card enters
                    end: "top -2 90%",    // when card leaves
                    scrub: true,
                }
            });

            tl.fromTo(card,
                { opacity: 0.3, y: -30 },
                { opacity: 1, y: 0, ease: "power2.out", duration: 1 }
            ).to(card,
                { opacity: 0.3, y: -30, ease: "power2.inOut", duration: 1 }
            );
        });
        gsap.from(".ex-heading", {
            opacity: 0,
            y: -50,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".experience-section",
                scroller: "body",
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
            }
        })
    }, []);

    return (
        <div ref={containerRef} className="experience-section w-full flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id='experience'>
            <div className="ex-heading text-3xl font-bold mb-8">
                Experience
            </div>
            <div className="experience-list flex flex-col gap-8">
                {experience.map((exp, index) => (
                    <div key={index} className="experience-item border-l-4 border-blue-500 pl-4 card">
                        <div className="role-date flex justify-between items-center">
                            <div className="type font-semibold text-lg">{exp.type}</div>
                            <div className="date text-sm text-gray-400">{exp.date}</div>
                        </div>
                        <div className="company font-medium text-md text-gray-700">{exp.company}</div>
                        <ul className="description list-disc list-inside mt-2 text-gray-600">
                            {exp.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                        <div className="skills mt-4">
                            <div className="font-medium mb-2">Skills:</div>
                            <ul className="skill-list flex flex-wrap gap-3">
                                {exp.skill.map((skill, id) => (
                                    <li
                                        key={id}
                                        className="skill-item bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;
