import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utilis/motion";

import { useMediaQuery } from "react-responsive";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  admin_panel_link,
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full'>
      <div className='relative w-full h-[220px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p
          className={`mt-2 cursor-pointer text-secondary text-[14px] ${
            isDescriptionExpanded ? "" : "line-clamp-3"
          }`}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
        >
          {description}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <div className='flex gap-4 mt-3'>
        <button
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-purple-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          type='button'
          onClick={() => window.open(live_demo_link, "_blank")}
        >
          Live Demo
        </button>
        {admin_panel_link && (
          <button
            className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-purple-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
            type='button'
            onClick={() => window.open(admin_panel_link, "_blank")}
          >
            Admin Panel
          </button>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>

        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
     

      <div className='w-full flex'>
        
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
       
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div key={`project-${index}`} className={isMobile ? '' : 'relative'}>
            {!isMobile ? (
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
              >
                <ProjectCard index={index} {...project} />
              </Tilt>
            ) : (
              <ProjectCard index={index} {...project} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
