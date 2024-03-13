import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import nullclass from "../../img/nullclass.png";
import Techgyaan from "../../img/techgyaan.jpg";
import nittrichy from "../../img/nit trichy.png";
import iitdhanbad from "../../img/iit dhanbad logo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works and Achievements
          </span>
          <span>Brands & Clients</span>
          <spane>

            <br />




          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={nullclass} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Techgyaan} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={nittrichy} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={iitdhanbad} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
