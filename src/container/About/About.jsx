import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";


  const abouts = [

    { title: 'Web Development' , description: 'Skilled in JavaScript, HTML, CSS, and other technologies such as React js.', imgUrl: images.about01},
    { title: 'Mobile Development' , description: 'I am a skilled mobile developer with expertise in Flutter, capable of creating high-performance and visually stunning applications for iOS and Android.', imgUrl:images.about02},
    { title: 'Embedded systems Development' , description: 'I am a skilled embedded systems developer with expertise in hardware and software development, capable of delivering reliable and optimized solutions for various applications.', imgUrl: images.about03},
    { title: 'UI/UX design' , description: 'I specialize in UI/UX design with Figma and Adobe XD, creating visually appealing and user-friendly interfaces that meet both user and business needs.', imgUrl: images.about04},
    { title: 'Video Editing' , description: 'I am an experienced video editor proficient in Adobe Premiere and After Effects, capable of producing visually appealing and engaging videos for different purposes and working closely with clients to bring their vision to life.', imgUrl: images.about05},
  
  
  ];


const About = () => {
 

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(order asc)';

   
  }, []);

  return (
    <>
      <h2 className="head-text">
      " Work <span>UNTIL</span> you no longer
        <br />
        have to <span>INTRODUCE</span> yourself "
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 5 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
