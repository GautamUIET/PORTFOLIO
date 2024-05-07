import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant } from '../utilis/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
       <h2 className={styles.sectionHeadText}>
         Overview
        </h2>   
    </motion.div>
    <motion.p variants={fadeIn()} 
     className='mt-4 text-secondary text-[]17px max-w-3xl leading-[30px]' 
    >
      I'm a skilled web developer with experience in Typescript and JavaScript , and expertise in frameworks like React,Node.js,Express.js,Three.js and MongoDB. I have a strong foundation in computer science, programming, and software development. I'm passionate about building scalable and responsive web applications that improve user experience and solve real-world problems. I'm a quick learner and a team player who is always eager to learn new technologies and work on challenging projects.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service,index)=> (
            <ServiceCard index={index} key={service.title} {...service}/>
          ))
        }
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")