import react from '../../assets/hero/react.png'
import express from '../../assets/hero/express.png'
import mongo from '../../assets/hero/mongo.png'
import tailwindcss from '../../assets/hero/tailwind.png'
import { motion } from "motion/react"
import { useDragControls } from "motion/react"

const Second = () => {
    const controls = useDragControls()

    return (
        <div className="second">
            <div className="main-box">
                <div className="sub-box  tech-icon">
                    <img src={react} alt="" className='react' />
                </div>
                <div className="sub-box express tech-icon">
                    <img src={express} alt="" />
                </div>
                <div className="sub-box mongo-box tech-icon">
                    <img src={mongo} alt="" className='mongo' />
                </div>
                <motion.div
                    className="sub-box tech-icon"
                    drag
                    dragControls={controls}
                    whileHover={{ scale: 1.2, rotate: 10 }}   // hover effect
                    whileTap={{ scale: 0.9 }}                // optional click effect
                    transition={{ type: "spring", stiffness: 300 }}
                    dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                    style={{
                        width: "120px",
                        height: "120px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        cursor: "grab",
                    }}
                >
                    <img src={tailwindcss} alt="tailwind" className="" />
                </motion.div>
            </div>
        </div>
    )
}

export default Second