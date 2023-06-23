import React from "react";
import { LineGradient } from "./LineGradient";
import { FaCode, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectsData } from "../data";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// const Project = ({ title }) => {
//   const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//       bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//   const projectTitle = title.split(" ").join("-").toLowerCase();

//   return (
//     <motion.div variants={projectVariant} className="relative">
//       <div className={overlayStyles}>
//         <p className="text-2xl font-playfair">{title}</p>
//         <p className="mt-7">
//           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
//           porttitor accumsan tincidunt.
//         </p>
//       </div>
//       <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
//     </motion.div>
//   );
// };
export const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-5">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-base">
          My projects make use of a vast variety of latest technology tools. My
          best experience is to create NodeJS Back-end Projects, Front-end React
          Project. Below are some of my projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red sm:mt-10 md:mt-0
                  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {/* <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          {/* <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />   */}

          {projectsData.map((project) => (
            <div className=" max-w-[400px] max-h-[400px] sm:mt-10 md:mt-0">
           
              <div className="shadow-lg group container    max-w-sm flex justify-center items-center  mx-auto ">
                <div>
                  <div className="w-full ">
             
                     <img 
                    src={project.image}
                    alt={project.name}
                    className=" h-48 w-full object-cover object-hidden  group-hover:opacity-25 "
                  />
                  </div>
                  <div className="py-8 px-4 bg-white  group-hover:opacity-25">
                    <span className="block text-lg text-gray-800 font-bold tracking-wide">
                      {project.name}
                    </span>
                    <span className="block text-black text-sm">
                      {project.desk}
                    </span>
                  </div>
                </div>
                <div className="absolute opacity-0  group-hover:opacity-100">
                  {project.tags.map((tag, id) => (
                    <p
                      className="font-medium text-white tracking-wider leading-relaxed"
                      key={id}
                    >
                      {tag}
                    </p>
                  ))}
                  <div className="text-white flex justify-between mt-4">
                    <a
                      className="cursor-pointer no-underline transition-transform"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaPlay aria-label="Demo" />
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <FaCode aria-label="Code" />
                    </a>
                  </div>
              
                </div>
              </div>
            </div>
          ))}

          <div
            className="flex justify-center text-center items-center p-10 bg-blue sm:mt-10 md:mt-0
                  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
