import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import First from '../components/Hero/First'
import Second from '../components/Hero/Second'

const HeroSection = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    // Text animations
    tl.from(".hero-main h1", { y: 50, opacity: 0 })
      .from(".hero-main h3", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main .info", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main p", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main .buttons", { y: 40, opacity: 0, stagger: 0.2 }, "-=0.3");

    // Icons intro animation
    tl.from(".tech-icon", {
        y: 50,
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)", // springy effect
    }, "-=0.3");

    // Continuous animations after intro
    gsap.to(".react", {
        rotate: 360,
        repeat: -1,
        duration: 6,
        ease: "linear"
    });

    gsap.to(".express", {
        y: -30,
        rotate: 15,
        repeat: -1,
        duration: 2.5,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".mongo", {
        y: -15,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    // Mongo hover scale
    const mongoBox = document.querySelector(".mongo-box");
    if (mongoBox) {
        mongoBox.addEventListener("mouseenter", () => {
            gsap.to(".mongo-box", { scale: 1.1, duration: 0.4 });
        });
        mongoBox.addEventListener("mouseleave", () => {
            gsap.to(".mongo-box", { scale: 1, duration: 0.4 });
        });
    }
});

    return (
        <section className="hero-main w-full flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id='about'>
            <First/>
            <Second/>
        </section>
    );

}

export default HeroSection