import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import {
    ImFacebook,
    ImInstagram,
    ImWhatsapp,
  } from 'react-icons/im';

import { motion } from "framer-motion";

import Loki from '/Loki_.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <img className="logo" src={Loki} alt=''>
        </img>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          EverSnap Studio
        </motion.h1>
        <div className="social">
            <a href='http://www.facebook.com' target='_blank'>
                <ImFacebook/>
            </a> 
            <a href='http://www.facebook.com' target='_blank'>
                <ImInstagram/>
            </a> 
            <a href='http://www.facebook.com' target='_blank'>
                <ImWhatsapp/>
            </a> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;