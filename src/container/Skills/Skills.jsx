import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const skills = [
{icon: images.html , Name:"Html" , bgColor: "#bb95ff"},
{icon: images.css , Name:"CSS", bgColor: "#bb95ff"},
{icon: images.cc , Name:"C" , bgColor: "#bb95ff"},
{icon: images.cpp , Name:"C++", bgColor: "#bb95ff"},
{icon: images.javascript , Name:"Javascript", bgColor: "#bb95ff"},
{icon: images.react , Name:"React JS", bgColor: "#bb95ff"},
{icon: images.python , Name:"Python", bgColor: "#bb95ff"},
{icon: images.flutter , Name:"Flutter", bgColor: "#bb95ff"},
{icon: images.php , Name:"Php", bgColor: "#bb95ff"},
{icon: images.sql , Name:"MySQL", bgColor: "#bb95ff"},
{icon: images.psoc , Name:"Psoc", bgColor: "#bb95ff"},
{icon: images.stm , Name:"STM32", bgColor: "#bb95ff"},
{icon: images.ras , Name:"Raspberry", bgColor: "#bb95ff"},
{icon: images.firebase , Name:"FireBase", bgColor: "#bb95ff"},
{icon: images.figma , Name:"Figma", bgColor: "#bb95ff"},
{icon: images.git , Name:"Git", bgColor: "#bb95ff"},
{icon: images.adobe , Name:"Adobe", bgColor: "#bb95ff"},



];
const experiences = [
  {
    year: "2021-2024",
    works: [
      {
        name: "Bachelor's Degree in Computer Engineering ",
        company: "The Higher Institute of Information Technologies and Communication (ISTIC) at Borj Cedria",
        desc: "Bachelor's Degree in Computer Engineering (Embedded systems and IoT).",
      },
    
    ],
  },
  {
    year: "2023     ",
    works: [
      {
        name: "Jr. Mobile Developer",
        company: "Freelancer",
        desc: "A junior mobile developer working with Flutter creates mobile applications using the Flutter framework and Dart programming language. ",
      },
      {
        name: "Community Builder Team Member",
        company: "Hult Prize Tunisia",
        desc: "Collaborate with Hult Prize Tunisia team to engage and empower young entrepreneurs in building sustainable and impactful startups for social change. ",
      },
    ],
  },
  {
    year: "2022     ",
    works: [
      {
        name: "Intern",
        company: " StartupGateX",
        desc: "Internship at StartupGateX , and participated as an organizing comittee during the “Innovation Days” ",
      },
      {
        name: "Jr. Embedded systems Developer ",
        company: "Freelancer",
        desc: "Design, develop and maintain embedded systems and software for various electronic devices. ",
      },
      {
        name: "Sponsoring vice Coordinator ",
        company: "Universe Club",
        desc: "Responsible for managing sponsor relationships and coordinating sponsorship activities for the organization. ",
      },
      {
        name: "CEO ",
        company: "Fastela",
        desc: "Developer and CEO of a mobility startup in an incubation program.",
      },
    ],
  },
  {
    year: "2019     ",
    works: [
      {
        name: "Jr. Web Developer",
        company: "Freelancer",
        desc: "A Junior Web Developer creates and maintains web applications using programming languages, frameworks, and design techniques.",
      },
      {
        name: "Founding President",
        company: "JCI Manouba JUNIOR",
        desc: "Responsible for establishing and leading the local chapter of the Junior Chamber International organization in the Manouba region. ",
      },
    ],
  },
];



const Skills = () => {

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(order asc)';
    const skillsQuery = '*[_type == "skills"] | order(order asc)';


  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Skills</span> & <span>Experiences</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
