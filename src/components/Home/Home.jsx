import "./home.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            Pet Photography & Portraits
          </motion.h1>
          <motion.h2 variants={textVariants}>Durham, CA</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

        </motion.div>
      </div>

      <div className="imageContainer">
          <img src="img/portfolio/dogs/lokinew.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;

// <motion.div
// className="slidingTextContainer"
// variants={sliderVariants}
// initial="initial"
// animate="animate"
// >
// Photographer Content Creator Influencer
// </motion.div>