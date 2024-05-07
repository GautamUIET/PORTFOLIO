import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import HarshitBlogs from "../assets/HarshitBlogs.png";
  import ShoppingCart from "../assets/ShoppingCart.png";
  import TopCourses from "../assets/TopCourses.png";
  import StudyNotion from "../assets/StudyNotion.png";
  import Portfolio from "../assets/Portfolio.png";
  
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      live_demo_link: "https://harshitportfolio.netlify.app/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };