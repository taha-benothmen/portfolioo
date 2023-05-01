import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";




const works = [
  {title:'Parking spots systeme', description:"A parking spot system is a technology-based solution that helps drivers find and reserve available parking spaces in a designated area or facility with openCV .", codeLink:"", projectLink:"" , imgUrl: images.park, tags:"Embedded systems development"},
  {title:'Barber shop', description:"Developing a digital booking service for barber shop with reactjs", codeLink:"", projectLink:"" , imgUrl: images.web1, tags:"Web development"},
  {title:'MyWallet', description:"Developing a digital wallet that allows individual access and sharing with family members. Is a secure and convenient way to manage and transfer funds electronically with Flutter & SQL Lite.", codeLink:"https://www.linkedin.com/posts/tahabenothmen_flutterdev-dartlang-ewalletapp-activity-7049682170591817728-oZDJ?utm_source=share&utm_medium=member_desktop", projectLink:"https://www.linkedin.com/posts/tahabenothmen_flutterdev-dartlang-ewalletapp-activity-7049682170591817728-oZDJ?utm_source=share&utm_medium=member_desktop" , imgUrl: images.mywallet, tags:"Mobile development"},
  {title:'AmbuTrack', description:"An ambulance tracking and monitoring system utilizes GPS, sensors, and monitoring devices to provide real-time information on the ambulance's location and the patient's condition during transportation With python , React & Node.Js.", codeLink:"", projectLink:"" , imgUrl: images.gpst, tags:"Embedded systems development"},



];


const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    setFilterWork(works);


  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
      My pieces  <span>Of</span> Art
      </h2>

      <div className="app__work-filter">
        {/* {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map( */}
        {["All", "Web development", "Mobile development","Embedded systems development", "Design" , "Video editing"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ marginTop: 20 }}>
                {work.title}
              </h4>
              <p className="p-text" style={{ marginTop: 5 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
