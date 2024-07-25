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
  fastapi
} from "../assets";

import { Chattu, HarshitBlogs, Portfolio, ShoppingCart, StudyNotion, TopCourses, fixit2, fullstack_ecom } from "../assets";


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
  {
    name : "Fast API",
    icon : fastapi
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "fiXit",
    icon: fixit2,
    iconBg: "#ffffff",
    date: "June 2024 - Present",
    points: [
      "Developed and maintained the frontend using Next.js.",
      "Built and optimized the backend using FastAPI.",
      "Analyzed customer calls to determine interest in purchasing products.",
      "Worked with data analytics and machine learning models to provide actionable insights for sales improvement.",
      "Collaborated with cross-functional teams to enhance sales strategies.",
      "Implemented and maintained APIs for data integration and processing."
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
    name: "Chattu",
    description: "Built a full stack online chat application employing Express.js for the server, MongoDB for data storage, and React.js for the client-side interface. The backend functionalities include chat management, group features, and user authentication with JWT tokens, dynamic file uploads facilitated by Multer, and real-time communication with Socket.io. The system supports user signup and login, while an admin panel enables viewing data related to messages, charts, and users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mui",
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
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "socket.io",
        color: "yellow-text-gradient"
      }
    ],
    image: Chattu, // Replace with the actual path to your image
    source_code_link: "https://github.com/HarshitUIET/OnlineChat",
    live_demo_link: "https://online-chat-nu.vercel.app/",
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
    image: fullstack_ecom,
    source_code_link: "https://github.com/HarshitUIET/E-Commerce-full-stack",
    live_demo_link: "https://e-commerce-full-stack-nine.vercel.app/",
    admin_panel_link: "https://e-commerce-full-stack-wful.vercel.app/"
  },
  {
    name: "Harshit Blogs",
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
    image: HarshitBlogs,
    source_code_link: "https://github.com/HarshitUIET/BlogReact",
    live_demo_link: "https://harshitblogreact.netlify.app/",
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
    image: ShoppingCart,
    source_code_link: "https://github.com/HarshitUIET/ShoppingCartReact",
    live_demo_link: "https://harshitshoppingcartreact.netlify.app/",
  },
  {
    name: "Top Courses",
    description:
      "Developed a online learning platform using React, integrating with a RESTful API,Utilized React useState and useE ect hooks.Implemented a category filter functionality allowing users to easily navigate and explore courses based on categories like Development, Business, Design, and Lifestyle.",
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
    image: TopCourses,
    source_code_link: "https://github.com/HarshitUIET/TopCourses",
    live_demo_link: "https://topcoursesharshit.netlify.app/",
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
    source_code_link: "https://github.com/HarshitUIET/StudyNotionRouter",
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
    image: Portfolio,
    source_code_link: "https://github.com/HarshitUIET/HarshitPortfolio",
    live_demo_link: "https://harshitportfolio12.netlify.app/",
  }
];

export { experiences, projects, services, technologies, testimonials };
