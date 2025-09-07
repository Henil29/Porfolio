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
      keyFeature: ["User registration, login, and profile management", "Product catalog with search and filter options","Shopping cart and secure checkout","Seller dashboard for managing products","Order tracking and history"],
      link: "https://shopsphere-fullstack.onrender.com/"
    },
  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate the main heading
    gsap.fromTo(".heading",
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
          trigger: ".project-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate project cards with stagger
    gsap.fromTo(".project-item",
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".project-list",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate project content elements individually
    gsap.fromTo(".project-content h3",
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
          trigger: ".project-item",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".project-content p",
      {
        x: -20,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-item",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate tech stack badges
    gsap.fromTo(".project-techstack span",
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".project-techstack",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate key features
    gsap.fromTo(".project-content li",
      {
        x: -20,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".project-content ul",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the Live button
    gsap.fromTo(".project-link a",
      {
        y: 20,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-link",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Add hover animations for project cards
    gsap.utils.toArray(".project-item").forEach((card) => {
      const image = card.querySelector("img");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  });

  return (
    <div className='project-section w-full px-4 sm:px-6 lg:px-8 py-12 bg-black text-white' id='projects'>
      <h2 className="text-4xl font-bold heading mb-12">Projects</h2>
      <div className="project-list grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {projects.map((project, index) => (
          <div key={index} className="project-item w-full bg-black border-gray-500 border-1 rounded-2xl overflow-hidden hover:scale-[1.02] transform transition-all duration-300 shadow-2xl">
            <div className="project-card">
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />

              <div className="p-6 project-content">
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-base">{project.description}</p>

                <div className="mb-6 project-techstack">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-white mb-3 text-lg">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.keyFeature.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-white mr-4">•</span>
                        &nbsp;{feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between project-link">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    &nbsp;Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects