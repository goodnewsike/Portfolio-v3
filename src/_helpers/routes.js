import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3Alt, FaReact, FaWindows, FaBootstrap} from 'react-icons/fa';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import {ReactComponent as ResponsiveIcon} from '../_assets/icons/responsive.svg';
import {ReactComponent as LocationIcon} from '../_assets/icons/location.svg';
import {ReactComponent as EmailIcon} from '../_assets/icons/email.svg';
import {ReactComponent as PhoneIcon} from '../_assets/icons/phone.svg';
import project1 from '../_assets/images/expense-reactjs.png';
import project2 from '../_assets/images/uba.jpg';
import project3 from '../_assets/images/food-website.jpg';
import projectImg from '../_assets/images/projects-3.jpg';

export const socialLinks = [
   {
      id: 1,
      icon: <FaGithub className="social-icon github" />,
      url: 'https://www.github.com/goodnewsike',
   },
   {
      id: 2,
      icon: <FaLinkedinIn className="social-icon linkedin" />,
      url: 'https://www.linkedin.com/in/goodnews-ike',
   },
   {
      id: 3,
      icon: <FaFacebook className="social-icon facebook" />,
      url: 'https://www.facebook.com/Gudniuzplanet',
   },
   {
      id: 4,
      icon: <FaInstagram className="social-icon instagram" />,
      url: 'https://www.instagram.com/prince_gudniuz',
   },
   // {
   //    icon: <FaDribbbleSquare className="social-icon" />,
   //    url: 'https://www.dribbble.com/',
   // },
   // {
   //    icon: <FaBehanceSquare className="social-icon" />,
   //    url: 'https://www.behance.com/',
   // },
   // {
   //    icon: <FaTwitterSquare className="social-icon" />,
   //    url: 'https://www.twitter.com/goodnews-ike',
   // },
];

export const navbarLinks = [
   {
      id: 1,
      name: 'Home',
      url: '/',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'hero',
   },
   {
      id: 2,
      name: 'About',
      url: '/#about',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'about',
   },
   // {
   //    id: 3,
   //    name: 'Services',
   //    url: '/#services',
   //    // activeLink: 1,
   //    pathname: '/',
   //    section: 'home',
   //    tab: 'services',
   // },
   {
      id: 3,
      name: 'Experience',
      url: '/#experience',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'experience',
   },
   {
      id: 4,
      name: 'Projects',
      url: '/projects',
      activeLink: 2,
      pathname: '/',
      section: 'home',
      tab: 'projects',
   },
   {
      id: 5,
      name: 'Contact',
      url: '/#contacts',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'contact',
   },
];

export const aboutDesc = [
   {
      id: 1,
      paragraph:
         'I am Goodnews Ogechukwu Ike, a Front-end Developer with skills in HTML5, CSS3, Javascript, jQuery, Bootstrap, React, Redux, Git, Firebase. I use all these tools to build user-friendly and scalable websites.',
   },
   {
      id: 2,
      paragraph:
         'I have worked with a team of web designers and developers to build websites that are used for commercial, educational and entertainment purposes and this speaks of my ability to interpret designs that spans across several platforms.',
   },
   {
      id: 3,
      paragraph:
         'I try to keep to the latest trends in the tech sector by reading up on recent blogs and watching vlogs that enable me to be up to date with developments in the tech sector. Being a diligent, result-oriented and detailed programmer, I always work towards achieving best results on every project I work on.',
   },
];

export const services = [
   {
      id: 1,
      icon: <ResponsiveIcon className="_card-icon" />,
      title: 'Responsive',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius nesciunt culpa iste, porro repellat. Ullam minus culpa ut nesciunt quos, asperiores corrupti, odio debitis necessitatibus maxime itaque enim odit.',
   },
   {
      id: 2,
      icon: <ResponsiveIcon className="_card-icon" />,
      title: 'Web Development',
      desc: 'I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.',
   },
   {
      id: 3,
      icon: <ResponsiveIcon className="_card-icon" />,
      title: 'Responsive',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius nesciunt culpa iste, porro repellat. Ullam minus culpa ut nesciunt quos, asperiores corrupti, odio debitis necessitatibus maxime itaque enim odit.',
   },
   // {
   //    id: 4,
   //    icon: <ResponsiveIcon className="_card-icon" />,
   //    title: 'Responsive',
   //    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius nesciunt culpa iste, porro repellat. Ullam minus culpa ut nesciunt quos, asperiores corrupti, odio debitis necessitatibus maxime itaque enim odit.',
   // },
];

// export const experienceTabs = [
//    {
//       id: 1,
//       activeTab: 1,
//       name: 'zyonel technologies',
//    },
//    {
//       id: 2,
//       activeTab: 2,
//       name: 'lorem ipsum ipsum',
//    },
//    {
//       id: 3,
//       activeTab: 3,
//       name: 'lorem ipsum',
//    },
// ];

export const experienceLists = [
   {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Zyonel Technologies',
      duration: 'August 2021 - Present',
      desc: [
         {
            id: 1,
            activities: 'Write maintainable and reuseable codes for different projects.',
         },
         {
            id: 2,
            activities: 'Work with a team of designers and developers to build a commercial, educative and entertainment web applications.',
         },
         {
            id: 3,
            activities: 'Work with Javascript framework (React.js) with predictable state manager (Redux).',
         },
      ],
   },
   {
      id: 2,
      title: 'Frontend Software',
      company: 'Zyonel ',
      duration: 'August 2021 - Present',
      desc: [
         {
            id: 1,
            activities: 'Write maintainable and reuseable codes for different projects.',
         },
         {
            id: 2,
            activities: 'Work with a team of designers and developers to build a commercial, educative and entertainment web applications.',
         },
         {
            id: 3,
            activities: 'Work with Javascript framework (React.js) with predictable state manager (Redux).',
         },
      ],
   },
   // {
   //    id: 3,
   //    title: 'Frontend',
   //    company: 'Zyonel Technologies',
   //    duration: 'August 2021 - Present',
   //    desc: [
   //       {
   //          id: 1,
   //          activities: 'Write maintainable and reuseable codes for different projects.',
   //       },
   //       {
   //          id: 2,
   //          activities: 'Work with a team of designers and developers to build a commercial, educative and entertainment web applications.',
   //       },
   //       {
   //          id: 3,
   //          activities: 'Work with Javascript framework (React.js) with predictable state manager (Redux).',
   //       },
   //    ],
   // },
   // {
   //    id: 3,
   //    title: 'Frontend',
   //    company: 'Zyonel Technologies',
   //    duration: 'August 2021 - Present',
   //    desc: [
   //       {
   //          id: 1,
   //          activities: 'Write maintainable and reuseable codes for different projects.',
   //       },
   //       {
   //          id: 2,
   //          activities: 'Work with a team of designers and developers to build a commercial, educative and entertainment web applications.',
   //       },
   //       {
   //          id: 3,
   //          activities: 'Work with Javascript framework (React.js) with predictable state manager (Redux).',
   //       },
   //    ],
   // },
   // {
   //    id: 3,
   //    title: 'Frontend',
   //    company: 'Zyonel Technologies',
   //    duration: 'August 2021 - Present',
   //    desc: [
   //       {
   //          id: 1,
   //          activities: 'Write maintainable and reuseable codes for different projects.',
   //       },
   //       {
   //          id: 2,
   //          activities: 'Work with a team of designers and developers to build a commercial, educative and entertainment web applications.',
   //       },
   //       {
   //          id: 3,
   //          activities: 'Work with Javascript framework (React.js) with predictable state manager (Redux).',
   //       },
   //    ],
   // },
];

export const contactList = [
   {
      id: 1,
      icon: <LocationIcon fas icon="map-marker-alt" className="contact-icon" />,
      item: 'Itire, Surulere, Lagos',
   },
   {
      id: 2,
      icon: <EmailIcon far icon="envelope-open" className="contact-icon" />,
      item: 'goodnewsike19@gmail.com',
      email: 'goodnewsike19@gmail.com',
   },
   {
      id: 3,
      icon: <PhoneIcon fas icon="phone-alt" className="contact-icon" />,
      item: '+234-813-010-0923',
      phone: '+234-813-010-0923',
   },
];

export const techStack = [
   {
      id: 1,
      stackIcon: <FaHtml5 className="stack-icon" />,
      stackName: 'HTML5',
   },
   {
      id: 2,
      stackIcon: <FaCss3Alt className="stack-icon" />,
      stackName: 'CSS3',
   },
   {
      id: 3,
      stackIcon: <FaCss3Alt className="stack-icon" />,
      stackName: 'JavaScript',
   },
   {
      id: 4,
      stackIcon: <FaBootstrap className="stack-icon" />,
      stackName: 'Bootstrap 5',
   },
   {
      id: 5,
      stackIcon: <FaGithub className="stack-icon" />,
      stackName: 'Git & Github',
   },
   {
      id: 6,
      stackIcon: <FaReact className="stack-icon" />,
      stackName: 'ReactJS',
   },
   {
      id: 7,
      stackIcon: <FaWindows className="stack-icon" />,
      stackName: 'Windows',
   },
];

export const projects = [
   {
      id: 1,
      image: project1,
      title: `expense tracker`,
      description:
         'A minimal application built to help calculate expenses for a given list of items or budget, an shows net calculations or results.',
      githubLink: `https://github.com/goodnewsike/expense-tracker-using-react`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://expense-reactjs.netlify.app`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'React',
         },
         {
            id: 2,
            title: 'Netlify',
         },
         {
            id: 3,
            title: 'Context API',
         },
      ],
   },
   {
      id: 2,
      image: project2,
      title: `UBA website clone`,
      description: 'A five page UBA website clone that shows information about the website, fully responsive.',
      githubLink: `https://github.com/goodnewsike/UBA-Website-clone`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://uba-clone.netlify.app`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'HTML5',
         },
         {
            id: 2,
            title: 'CSS3',
         },
         {
            id: 3,
            title: 'Javascript',
         },
         {
            id: 4,
            title: 'Bootstrap',
         },
      ],
   },
   {
      id: 3,
      image: project3,
      title: `Responsive Landing Page`,
      description: 'A landing page with animations to display information of a food vendor',
      githubLink: `https://github.com/goodnewsike/Mobile-first-responsive-website.`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://food-landing-sample.netlify.app`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'HTML',
         },
         {
            id: 2,
            title: 'CSS',
         },
         {
            id: 3,
            title: 'Scroll-reveal',
         },
      ],
   },
   // {
   //    id: 4,
   //    image: `/projects-3.jpg`,
   //    title: `just project title`,
   //    description:
   //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quis rerum ipsa repellendus in quaerat fuga illo, quae eos, animi quibusdam aspernatur possimus? Beatae quas eos dolorum vel repellendus.',
   //    githubLink: `https://github.com/`,
   //    githubIcon: <FiGithub className="project-icon" />,
   //    extUrl: `https://google.com`,
   //    extUrlIcon: <FiExternalLink className="project-icon" />,
   //    stack: [
   //       {
   //          id: 1,
   //          title: 'gatsby',
   //       },
   //       {
   //          id: 2,
   //          title: 'bootstrap',
   //       },
   //       {
   //          id: 3,
   //          title: 'material ui',
   //       },
   //    ],
   // },
];

export const otherProjects = [
   {
      id: 1,
      title: 'portfolio v1',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com/goodnewsike/ikegoodnews',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://infallible-shirley-33e2c1.netlify.app/',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 2,
      title: 'scroll reveal',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com/goodnewsike/scroll-reveal',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://keen-jones-093f3d.netlify.app/',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 3,
      title: 'step form',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com/goodnewsike/step-form',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://zealous-ardinghelli-88b88e.netlify.app/',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 4,
      title: 'todo list',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com/goodnewsike/js-todo-list',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://zen-poitras-6c7c5a.netlify.app',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 5,
      title: 'issue tracker',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com/goodnewsike/js-issue-tracker',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://lucid-curie-73f693.netlify.app/',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 6,
      title: 'portfolio v2',
      projectImg: projectImg,
      stack: [
         {
            id: 1,
            name: 'Javascript',
         },
         {
            id: 2,
            name: 'React',
         },
         {
            id: 3,
            name: 'Redux',
         },
      ],
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta at doloremque ipsam, nulla incidunt quas ea deserunt esse neque ad eius quis nesciunt labore ipsum, omnis iusto totam necessitatibus reiciendis.',
      githubLink: 'https://github.com',
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: 'https://nervous-colden-802aab.netlify.app/',
      extIcon: <FiExternalLink className="project-icon" />,
   },
];
