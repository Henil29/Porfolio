import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Education = () => {
    const education = [
        {
            img: "🎓",
            university: "Maulana Azad National Urdu University, Hyderabad",
            degree: "B.Tech (Lateral Entry), Computer Science",
            date: "Oct 2022 - May 2025",
            cgpa: "8.71/10",
        },
        {
            img: "🏫",
            university: "Maulana Azad National Urdu University, Hyderabad",
            degree: "Diploma in Computer Science and Engineering",
            date: "Aug 2019 - Jun 2022",
            cgpa: "9.78/10",
        },
    ];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        
        gsap.from(".education-item", {
            opacity: 0,
            x: -100,
            duration: 2,
            scrollTrigger: {
                trigger: ".education-section",
                scroller: "body",
                start: "top 85%",
                end: "top 55%",
                scrub: 2,
            }
        })
        gsap.from(".education-title", {
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

    })

    return (
        <div className="education-section w-full flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-black text-white" id='education'>
            {/* Title */}
            <div className="education-title text-3xl font-bold mb-8">
                Education
            </div>

            {/* Education Items */}
            <div className="education-list flex flex-col gap-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="education-item flex items-start gap-4"
                    >
                        {/* Icon */}
                        <div className="icon w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-xl">
                            {edu.img}
                        </div>

                        {/* Text Info */}
                        <div className="info flex flex-col">
                            <div className="university font-bold text-lg">
                                {edu.university}
                            </div>
                            <div className="degree text-gray-200 text-md">
                                {edu.degree}
                            </div>
                            <div className="date-cgpa text-sm text-gray-300 mt-1">
                                {edu.date} • CGPA: {edu.cgpa}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
