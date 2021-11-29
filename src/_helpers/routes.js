import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3Alt, FaReact, FaWindows, FaBootstrap} from 'react-icons/fa';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import {ReactComponent as ResponsiveIcon} from '../_assets/icons/responsive.svg';
import {ReactComponent as LocationIcon} from '../_assets/icons/location.svg';
import {ReactComponent as EmailIcon} from '../_assets/icons/email.svg';
import {ReactComponent as PhoneIcon} from '../_assets/icons/phone.svg';
import project1 from '../_assets/images/projects-1.jpg';
import project2 from '../_assets/images/projects-2.jpg';
import project3 from '../_assets/images/projects-3.jpg';
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
   {
      id: 3,
      name: 'Services',
      url: '/#services',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'services',
   },
   {
      id: 4,
      name: 'Experience',
      url: '/#experience',
      // activeLink: 1,
      pathname: '/',
      section: 'home',
      tab: 'experience',
   },
   {
      id: 5,
      name: 'Projects',
      url: '/projects',
      activeLink: 2,
      pathname: '/',
      section: 'home',
      tab: 'projects',
   },
   {
      id: 6,
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
         'I tried to keep to the latest trends in the tech sector by reading up on recent blogs and watching vlogs that enable me to be up to date with developments in the tech sector. Being a diligent, result-oriented and detailed programmer, I always work towards achieving best results on every project I work on.',
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

export const experienceTabs = [
   {
      id: 1,
      activeTab: 1,
      name: 'zyonel technologies',
   },
   {
      id: 2,
      activeTab: 2,
      name: 'lorem ipsum ipsum',
   },
   {
      id: 3,
      activeTab: 3,
      name: 'lorem ipsum',
   },
];

export const experienceLists = [
   {
      id: 1,
      title: 'Frontend Software Developer',
      company: 'Zyonel Technologies',
      duration: 'August 2021 - Present',
      desc: [
         {
            id: 1,
            activities:
               'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur',
         },
         {
            id: 2,
            activities:
               'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed Lorem ipsum, dolor sit amet consectetur',
         },
         {
            id: 3,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
      ],
   },
   {
      id: 2,
      title: 'Frontend Software',
      company: 'Zyonel Technologies',
      duration: 'August 2021 - Present',
      desc: [
         {
            id: 1,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
         {
            id: 2,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
         {
            id: 3,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
      ],
   },
   {
      id: 3,
      title: 'Frontend',
      company: 'Zyonel Technologies',
      duration: 'August 2021 - Present',
      desc: [
         {
            id: 1,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
         {
            id: 2,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
         {
            id: 3,
            activities: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veritatis ex quisquam sed',
         },
      ],
   },
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
      title: `just project title`,
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quis rerum ipsa repellendus in quaerat fuga illo, quae eos, animi quibusdam aspernatur possimus? Beatae quas eos dolorum vel repellendus.',
      githubLink: `https://github.com/`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://google.com`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'html',
         },
         {
            id: 2,
            title: 'css',
         },
         {
            id: 3,
            title: 'javascript',
         },
      ],
   },
   {
      id: 2,
      image: project2,
      title: `just project title`,
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quis rerum ipsa repellendus in quaerat fuga illo, quae eos, animi quibusdam aspernatur possimus? Beatae quas eos dolorum vel repellendus.',
      githubLink: `https://github.com/`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://google.com`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'react',
         },
         {
            id: 2,
            title: 'bootstrap',
         },
         {
            id: 3,
            title: 'next',
         },
      ],
   },
   {
      id: 3,
      image: project3,
      title: `just project title`,
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quis rerum ipsa repellendus in quaerat fuga illo, quae eos, animi quibusdam aspernatur possimus? Beatae quas eos dolorum vel repellendus.',
      githubLink: `https://github.com/`,
      githubIcon: <FiGithub className="project-icon" />,
      extUrl: `https://google.com`,
      extUrlIcon: <FiExternalLink className="project-icon" />,
      stack: [
         {
            id: 1,
            title: 'gatsby',
         },
         {
            id: 2,
            title: 'bootstrap',
         },
         {
            id: 3,
            title: 'material ui',
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 2,
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 3,
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 4,
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 5,
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
   {
      id: 6,
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
      extUrl: 'https://google.com',
      extIcon: <FiExternalLink className="project-icon" />,
   },
];
