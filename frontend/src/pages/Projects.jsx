import React from 'react'
import test from '../assets/project/test1.png'
import connectify from '../assets/project/connectify.png'
import shopsphere from '../assets/project/shopsphere.png'
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Projects = () => {
  const projects = [
    {
      img: connectify,
      title: "Connectify",
      description: "Connectify is a social media platform where users can create profiles, share posts, follow friends, and engage with content through likes and comments. It also features a real-time messaging system for seamless communication.",
      techStack: ["React", "TailwindCSS", "CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary for media storage"],
      keyFeature: ["User authentication and profile management", "Follow/unfollow system with followers & following list", "Create, edit, like, and comment on posts", "Real-time chat and messaging", "Search users and explore posts"],
      link: "https://connectify-1opq.onrender.com/"
    },
    {
      img: shopsphere,
      title: "ShopSphere",
      description: "ShopShere is an e-commerce platform that allows users to browse products, manage a cart, and complete purchases. It provides both buyers and sellers with a smooth experience for listing, buying, and selling products.",
      techStack: ["React", "TailwindCSS", "CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary for media storage"],
      keyFeature: ["User registration, login, and profile management", "Product catalog with search and filter options", "Shopping cart and secure checkout", "Seller dashboard for managing products", "Order tracking and history"],
      link: "https://shopsphere-fullstack.onrender.com/"
    },
  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      defaults: { ease: "power3.out" },
    });

    // Whole section soft zoom & fade
    tl.fromTo(".project-section",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Heading slides slightly from bottom with delay overlap
    tl.fromTo(".heading",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    // Project cards float up gently
    tl.fromTo(".project-item",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
      "-=0.4"
    );

    // Text & content fade in with slight upward drift
    tl.fromTo(".project-content h3, .project-content p, .project-content li",
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.3"
    );

    // Tech stack icons pop in with bounce feel
    tl.fromTo(".project-techstack span",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.07 },
      "-=0.2"
    );

    // Live/demo buttons slide in slightly from below
    tl.fromTo(".project-link",
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)", stagger: 0.1 },
      "-=0.2"
    );

    // Hover effects remain
    gsap.utils.toArray(".project-item").forEach((card) => {
      const image = card.querySelector("img");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power2.out" });
        gsap.to(image, { scale: 1.08, duration: 0.5, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
      });
    });
  });




  return (
    <div className='project-section w-full px-5 md:px-[50px] xl:px-[250px] py-12 bg-black text-white' id='projects'>
      <h2 className="text-4xl font-bold heading mb-12">Projects</h2>
      <div className="project-list grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {projects.map((project, index) => (
          <div key={index} className="project-item group w-full bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5 project-content">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 project-techstack">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800/80 text-gray-300 px-2.5 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm text-gray-300 font-semibold mb-2">Key Features</h4>
              <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc list-inside">
                {project.keyFeature.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-flex items-center justify-center gap-1 bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Projects