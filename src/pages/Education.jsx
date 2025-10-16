import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Education = () => {
    const education = [
        {
            img: "🎓",
            university: "LJ Institute of Engineering and Technology, Ahmedabad",
            degree: "BE Computer Science",
            date: "Aug 2023 - Jun 2027",
            cgpa: "8.17/10",
        },
        {
            img: "🏫",
            university: "Gondal Gurukul",
            degree: "SSC,HSC Science",
            date: "May 2019 - March 2023",
            cgpa: "76/100",
        },
    ];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".education-item", {
            opacity: 0,
            x: -100,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".education-section",
                start: "top 85%",
                toggleActions: "play none none none", // ✅ play once
                once: true, // ✅ ensures it doesn't replay
            },
        });

        gsap.from(".education-title", {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".education-section",
                start: "top 90%",
                toggleActions: "play none none none", // ✅ play once
                once: true,
            },
        });
    });


    return (
        <div className="education-section w-full flex flex-col px-5 md:px-[50px] xl:px-[250px] py-12 lg:py-16 bg-black text-white" id='education'>
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
                        <div className="icon w-10 h-10 aspect-square flex items-center justify-center rounded-full overflow-hidden bg-gray-600 text-xl leading-none shrink-0">
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
