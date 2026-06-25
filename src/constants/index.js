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
  lumora,
  selfie,
  mobileworld,
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
} from '../assets';

// Import company logos separately
import wahy from "../assets/company/wahy.png";
import zignature from "../assets/company/zignature.png";
import Selfie from "../assets/company/selfie.png";
import stackly from "../assets/company/stackly.png";

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
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Python Full-Stack Developer",
    company_name: "The Stackly",
    icon: stackly,
    iconBg: "#383E56",
    date: "April 2026 - Present",
    points: [
      "Building and maintaining scalable full-stack web applications using Python and Django for enterprise clients.",
      "Designing responsive and interactive frontend interfaces with React.js, HTML, CSS, and JavaScript.",
      "Optimizing database performance and writing efficient queries using PostgreSQL and MySQL.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions in an Agile environment.",
      "Conducting code reviews and mentoring junior developers to maintain code quality and best practices.",
    ],
  },
  {
    title: "Python Full-Stack Developer",
    company_name: "Wahy Labs Solutions",
    icon: wahy,
    iconBg: "#383E56",
    date: "May 2024 - May 2025",
    points: [
      "Studied and gained expertise in advanced Python and the Django framework for web development.",
      "Developed and designed dynamic web applications using HTML, CSS, and JavaScript.",
      "Gained hands-on experience with full-stack development, including both frontend and backend technologies.",
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
    name: "iWeddings Studio",
    description:
      "A premium digital showcase for iWeddings Studio, specializing in timeless wedding photography. The website offers effortless booking, portfolio browsing, and client storytelling designed to capture hearts before the first click",
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
    name: "Lumora Events",
    description:
      "A vibrant digital platform for an event management group, designed to showcase services, past events, and client testimonials. The portal enables seamless event inquiries, service bookings, and personalized planning experiences for clients.",
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
    image: lumora,
    source_code_link: "https://github.com/",
  },
  {
    name: "Selfie Studio Web Portal",
    description:
      "A modern digital platform for a selfie studio, offering an interactive experience for visitors to explore studio packages, view creative galleries, and book sessions online with ease — designed to turn every visit into a memorable capture",
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
    image: selfie,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mobile World Web portal",
    description:
      "A complete digital storefront for a mobile shop, offering seamless product browsing, brand-wise filtering, and easy purchase options. Designed to deliver a modern retail experience with up-to-date product showcases and customer engagement features.",
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
    image: mobileworld,
    source_code_link: "https://github.com/",
  },
  {
    name: "Craftman Interiors",
    description:
      "A premium digital portfolio for an interior designing group, showcasing elegant design projects, service offerings, and client transformations. Built to inspire visitors with curated visuals and enable effortless consultation bookings",
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