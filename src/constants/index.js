
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,

  python,
  django,
  postgresql,
  powerbi,
  excel,
  ps,

  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import wahy from "../assets/company/wahy.png";
import zignature from "../assets/company/zignature.png";
import Selfie from "../assets/company/selfie.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wedding Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "ps",
    icon: ps,
  },
  {
    name: "git",
    icon: git,
  },





  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  

 

];

const experiences = [
  {
    title: "Python Full-Stack Developer",
    company_name: "Wahy Labs Solutions",
    icon: wahy,
    iconBg: "#383E56",
    date: "May 2024 - May 2025",
    points: [
      "Studied and gained expertise in advanced Python and the Django framework for web development.",
      "Developed and designed dynamic web applications using HTML, CSS, and JavaScript.",
      "Gained hands-on experience with full-stack development, including both frontend and backend technologies..",
      "Collaborated with mentors and team members to enhance problemsolving and coding efficiency.",
    ],
  },
  {
    title: "Education Consultant",
    company_name: "Zignature",
    icon: zignature, 
    iconBg: "#383E56",
    date: "2022 - PRESENT",
    points: [
      "Guiding students through academic and career pathways at Zignature Education Consultancy.",
      "Providing expert advice on educational programs and assisting with admissions processes.",
      "Passionate about helping individuals achieve their educational goals with personalized support.",
    
    
    ],
  },
  {
    title: "Wedding Photographer",
    company_name: "Selfie Wedding Studio",
    icon: Selfie, 
    iconBg: "#383E56", 
    date: "2018 - PRESENT",
    points: [
      "Passionate wedding photographer with a keen eye for capturing timeless moments.",
      "Started my photography journey in 2018 and honed skills in storytelling, composition, and client collaboration.",
      "Committed to delivering high-quality, memorable images that reflect the essence of every special occasion.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "E-Learning platform",
    description:
      "An E-Learning platform is an online system for delivering education. It allows students to access courses, video lessons, and quizzes, while instructors manage content and track progress. It supports flexible, self-paced learning on any device.",
    tags: [
      {
        name: "Python-Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML-CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guruvayor Devaswom online-booking",
    description:
      "A digital platform for booking temple services like darshan, poojas, marriage functions, and accessing birth star (nakshatra) details. It offers easy and convenient access for devotees.",

    tags: [
      {
        name: "Python-Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML-CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
 
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "FarmXpert",
    description:
      "The E-Farms Seed Description System helps manage planting materials efficiently. It replaces manual notebooks with a digital platform and improving accuracy. This system automates seed tracking, purchases, and customer payments.",
    tags: [
      {
        name: "Python-Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML-CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
 
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
