"use client";

import { HyperText } from "@/components/magicui/hyper-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import { motion } from "framer-motion";
import Skills from "./Components/Skills";


export default function Home() {
  return (
    <motion.div
      className="font-sans max-w-4xl mx-auto min-h-screen py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <main className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <TextAnimate animation="blurIn">
                Hi, I'm Azijul Hakim
              </TextAnimate>
            </h1>
            <h6 className="text-xl mt-2 text-gray-700 dark:text-gray-300">
              <TextAnimate animation="blurInUp" by="character" once>
                MERN Stack Web Developer
              </TextAnimate>
            </h6>
          </div>

          {/* Profile Image */}
          <div className="shrink-0">
            <Image
              className="rounded-full shadow-lg border border-gray-300 dark:border-gray-600"
              src="/WEB.jpg"
              width={120}
              height={120}
              alt="Azijul Hakim"
            />
          </div>
        </div>

        {/* About Section */}
        <section>
          <HyperText className="text-2xl text-gray-800 dark:text-white mb-3">
            About
          </HyperText>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <TextAnimate animation="blurIn" as="span">
              I'm Azijul Hakim, a passionate Front-End Developer based in
              Bangladesh, focused on building modern, performant, and
              user-friendly web applications. With a strong command over both
              front-end and back-end technologies, I enjoy solving real-world
              problems through clean code and thoughtful design.
            </TextAnimate>
          </p>
        </section>
      </main>
      {/* Skill Section */}
      <Skills/>



      {/* Dock Section */}
     
    </motion.div>
  );
}
