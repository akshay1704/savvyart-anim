import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

const Parallax = ({ type }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <motion.div
      className="parallax"
      ref={ref}
      variants={variants}
      initial="initial"
      // animate="animate"
    //   animate={isInView && "animate"}
      whileInView="animate"
      style={{
        background:
          "linear-gradient(180deg, #1ae0eb, #8ff2f7)",
      }}
    >
      <motion.h1 style={{ y: yText }} variants={variants}>
        {"Photography takes an instant out of time, altering life by holding it still."}
      </motion.h1>
      <motion.div className="park" variants={variants}></motion.div>
      <motion.div
        className="planets"
        variants={variants}
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars" variants={variants}></motion.div>
    </motion.div>
    
  );
};

export default Parallax;