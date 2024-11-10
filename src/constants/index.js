import {
  backend,
  creator,
  css,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  web,
  docker,
  Next,
} from "../assets";

import { wave_chat, image, gemini_ai,ecomzy, gautam_blogs, Portfolio, StudyNotion, TopCourses, quiz_app, real_estate,Shopper } from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name : "docker",
    icon : docker,
  },
  {
    name : "Next JS",
    icon : Next,
  },

];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Infowiz Software Solutions",
    iconBg: "#ffffff",
    icon: git,
    date: "June 2024 - July 2024",
    points: [
      "Developed and maintained the frontend using Next.js.",
      "Built and optimized the backend using mongoDB and prisma",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wave-Chat",
    description: "Built a full stack online chat application employing Express.js for the server, Prisma and PostgresSQL for data storage, and Next.js for the client-side and server-side interface. The backend functionalities include chat management, group features, and user authentication with CLERK, dynamic file uploads facilitated by uploadthing, and real-time communication with Socket.io. The system supports user signup and login",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "Next.js",
        color: "pink-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "expressjs",
        color: "pink-text-gradient"
      },
      {
        name: "Prisma",
        color: "green-text-gradient"
      },
      {
        name: "socket.io",
        color: "yellow-text-gradient"
      }
    ],
    image: wave_chat, // Replace with the actual path to your image
    source_code_link: "https://github.com/GautamUIET/WAVE-CHAT",
    live_demo_link: "https://wave-chat-zvdn.vercel.app/",
  },
  {
    name: "E-Commerce Website",
    description:
      "Built an full stack E-commerce web application employing Express.js for the server, MongoDB for data storage, and React for the client-side interface . The backend functionalities include product management through RESTful APIs , user authentication with JWT tokens, and dynamic le uploads facilitated by Multer.The system supports user signup and login, while an admin panel enables the addition and removal of products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Shopper,
    source_code_link: "https://github.com/GautamUIET/NEW_FULL_STACK",
    live_demo_link: "https://new-full-stackfrontend.vercel.app/",
    admin_panel_link: "https://new-full-stack.vercel.app"
  },
  {
    name: "Gautam Blogs",
    description:
      "Developed a blog website using React.js ,Implemented dynamic routing and navigation using React Router to display different pages and Utilized React Context API for state management..Implemented a pagination system allowing users to navigate through multiple pages of blog posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: gautam_blogs,
    source_code_link: "https://github.com/GautamUIET/BlogReact",
    live_demo_link: "https://blog-react-cyan-xi.vercel.app/",
  },

  {
    name: "Gemini AI",
    description: "A robust AI-powered web application that offers predictive analytics and insights. Built using  React.",
    tags: [
      { name: "react", color: "pink-text-gradient" },
    ],
    image: gemini_ai,
    source_code_link: "https://github.com/GautamUIET/Gemini-Ai",
    live_demo_link: "https://gemini-ai-lemon.vercel.app/",
  },
  {
    name: "Real Estate App",
    description: "Developed a real estate platform where users can browse, list, and filter properties. Built with the MERN stack, featuring a user-friendly UI and responsive design.",
    tags: [
      { name: "mongodb", color: "green-text-gradient" },
      { name: "expressjs", color: "blue-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "nodejs", color: "blue-text-gradient" },
    ],
    image: real_estate,
    source_code_link: "https://github.com/GautamUIET/MERN-real-estate",
    live_demo_link: "https://mern-real-estate-ms1j.onrender.com/",
  },
  {
    name: "Quiz App",
    description: "An interactive quiz application built using React.js. Features include multiple question formats, score tracking, and responsive design for optimal user experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: quiz_app,
    source_code_link: "https://github.com/GautamUIET/Quiz_APP",
    live_demo_link: "https://quiz-app-mjyh.vercel.app/",
  },

  {
    name: "Shopping Cart",
    description:
      "Utilizes Redux for state management to create a dynamic shopping cart experience, allowing users to browse products, add them to the cart, and manage their selections. Configured the Redux store using configureStore and Implemented state management using Redux Toolkit with a cartSlice.js to manage the shopping cart state",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: ecomzy,
    source_code_link: "https://github.com/GautamUIET/Shopping-cart",
    live_demo_link: "https://shopping-cart-phi-coral.vercel.app/",
  },
  
  {
    name: "Study Notion",
    description:
      "StudyNotion is an innovative platform designed to streamline the learning experience for both students and instructors. Built with React and Tailwind CSS, StudyNotion offers a user-friendly interface and robust functionality to cater to the needs of learners and educators alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

    ],
    image: StudyNotion,
    source_code_link: "https://github.com/GautamUIET/Study-notion",
    live_demo_link: "https://studynotionharshit.netlify.app/"
  },
  {
    name: "Portfolio",
    description:
      "Elevate your online presence with a dynamic portfolio built on the latest web technologies. Using React, Tailwind CSS, Framer Motion, and Three.js, this portfolio combines stunning visual effects with seamless functionality to showcase your skills and accomplishments in a captivating way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      }

    ],
    image: image,
    source_code_link: "https://github.com/GautamUIET/PORTFOLIO/",
    live_demo_link: "https://portfolio-gamma-coral-74.vercel.app/",
  }
];

export { experiences, projects, services, technologies, testimonials };
