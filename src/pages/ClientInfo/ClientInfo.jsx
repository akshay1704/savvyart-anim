import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './ClientInfo.scss'

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

export const ClientInfo = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="ClientInfo"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          If you see something that moves you, and then you snap it,
          <br /> you keep a moment
        </p>
        <hr />
      </motion.div> 
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Photography</motion.b> takes an instant out of time
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>altering life</motion.b> by holding it still.
          </h1>
          <button>OUR SERVICES</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Studio Portraits</h2>
          <p>
            Bring your furry friend to our home studio. We will have yummy treats, but do carry your pup's favourite if that brings up the crazy smile. Do give a heads up if your pet is shy
            or a rescue so that we can be extra prepared! 
            <br/> <br/>
            We can do the shoot at our studio, or we can bring the studio to you.
            <br/> <br/>
            Choose 5 high resolution photos - a mix of catching a treat, portrait head shot and a full size photo.
            <br/> <br/>
            
            <span style={{fontWeight : 'bold'}}>$150 / hr</span>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Home Sweet Home</h2>
          <p>
            Let's get some goofy photos of your pet at the comfor of your home. Get some shots of them cozying
            up on their bed or favourite couch, a walk around their regular walking routes and capture memories.
            <br/> <br/>
            Choose 5 high resolution photos from an Online Galler between outdoor and indoor frames.
            <br/> <br/>
            <span style={{fontWeight : 'bold'}}>$300 / hr</span>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mini Picnic</h2>
          <p>
            Capture some shots of your pup in action. Meet at a park of your choice, and get some action shots, portraits and family shots.
            <br/> <br/>
            Choose 5 high resolution photos from an online gallery between human, portrait and action photos.
            <br/> <br/>
            <span style={{fontWeight : 'bold'}}>$300 / hr</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
