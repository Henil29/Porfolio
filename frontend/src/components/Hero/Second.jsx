import react from '../../assets/hero/react.png'
import express from '../../assets/hero/express.png'
import mongo from '../../assets/hero/mongo.png'
import tailwindcss from '../../assets/hero/tailwind.png'
import { motion, useDragControls } from "motion/react"
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Second = () => {
  const controls = useDragControls()
    const boundsRef = useRef(null)
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })

    tl.from(".hero-main h1", { y: 50, opacity: 0 })
      .from(".hero-main h3", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main .info", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main p", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero-main .buttons", { y: 40, opacity: 0, stagger: 0.2 }, "-=0.3")

    tl.from(".tech-icon", {
      y: 50,
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }, "-=0.3")

    gsap.to(".react", {
      rotate: 360,
      repeat: -1,
      duration: 6,
      ease: "linear",
    })

    gsap.to(".express", {
      y: -30,
      rotate: 15,
      repeat: -1,
      duration: 2.5,
      yoyo: true,
      ease: "power1.inOut",
    })

    gsap.to(".mongo", {
      y: -15,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    const mongoBox = document.querySelector(".mongo-box")
    if (mongoBox) {
      mongoBox.addEventListener("mouseenter", () =>
        gsap.to(".mongo-box", { scale: 1.1, duration: 0.4 })
      )
      mongoBox.addEventListener("mouseleave", () =>
        gsap.to(".mongo-box", { scale: 1, duration: 0.4 })
      )
    }
  })

  return (
    <div className="
          second w-full lg:w-1/3 mt-8 lg:mt-12 lg:ml-12 flex justify-center lg:justify-start
      order-last lg:order-none
    ">
    {/* Drag bounds (mobile: 100vw width and some height) */}
    <div ref={boundsRef} className="relative max-[767px]:w-[100vw] max-[767px]:-mx-5 max-[767px]:px-5 max-[767px]:h-48 overflow-visible">
      {/* Grid for large/medium, row for small */}
  <div className="
    main-box w-full h-auto grid 
    grid-cols-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2
    sm:gap-6 gap-4
    justify-center items-center
    sm:max-w-[500px] md:max-w-[400px]
    flex-wrap
    sm:mx-0 mx-auto
    sm:grid md:grid lg:grid
    max-[767px]:flex max-[767px]:flex-row max-[767px]:gap-5 max-[767px]:justify-center max-[767px]:overflow-visible max-[767px]:pt-2
    [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
  ">
        {/* React */}
        <div className="tech-icon bg-zinc-800/60 rounded-xl flex items-center justify-center select-none 
          h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px]">
          <img src={react} alt="react" className="react p-5 pointer-events-none" />
        </div>

        {/* Express */}
        <div className="tech-icon bg-zinc-800/60 rounded-xl flex items-center justify-center select-none 
          h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] express">
          <img src={express} alt="express" className="p-5 pointer-events-none" />
        </div>

        {/* Mongo */}
        <div className="tech-icon mongo-box bg-zinc-800/60 rounded-xl flex items-center justify-center select-none 
          h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px]">
          <img src={mongo} alt="mongo" className="mongo p-5 pointer-events-none" />
        </div>

        {/* Tailwind */}
        <motion.div
          className="tech-icon bg-zinc-800/60 rounded-xl flex items-center justify-center cursor-grab select-none 
            h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] z-10"
          drag
          dragControls={controls}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          dragConstraints={boundsRef}
        >
          <img src={tailwindcss} alt="tailwind" className="p-5 pointer-events-none" />
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Second
