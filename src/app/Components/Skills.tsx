"use client";

import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiNetlify, SiFigma
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";






type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
};

type SkillCategory = {
  [category: string]: Skill[];
};

const skillsData: SkillCategory = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 80 },
    { name: "React", icon: <FaReact className="text-cyan-500" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 75 },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 70 },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 80 },
   
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
    { name: "VS Code", icon: <VscVscode className="text-blue-600" />, level: 90 },
    { name: "Netlify", icon: <SiNetlify className="text-[#32E6E2]" />, level: 95 },
    { name: "Vercel", icon: <IoLogoVercel className="text-white bg-black rounded-2xl p-1" />, level: 95 },
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 80 },
  ],
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-3xl font-bold text-start poppins-bold text-primary mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Marquee of Icons */}
     <Marquee speed={50} gradient={false} className="mb-10">
        {Object.values(skillsData)
          .flat()
          .map((skill, index) => (
            <motion.div
              key={index}
              className="mx-6 text-5xl tooltip"
              data-tip={skill.name}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.05 * index, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.2 }}
            >
              <div>{skill.icon}</div>
            </motion.div>
          ))}
      </Marquee>

    </div>
  );
};

export default Skills;
