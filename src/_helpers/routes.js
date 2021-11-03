import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3Alt, FaReact, FaWindows, FaBootstrap} from 'react-icons/fa';
import {ReactComponent as ResponsiveIcon} from '../_assets/icons/responsive.svg';
import {ReactComponent as LocationIcon} from '../_assets/icons/location.svg';
import {ReactComponent as EmailIcon} from '../_assets/icons/email.svg';
import {ReactComponent as PhoneIcon} from '../_assets/icons/phone.svg';

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
      activeLink: 1,
   },
   {
      id: 2,
      name: 'About',
      url: '/#about',
      activeLink: 1,
   },
   {
      id: 3,
      name: 'Services',
      url: '/#services',
      activeLink: 1,
   },
   {
      id: 4,
      name: 'Experience',
      url: '/#experience',
      activeLink: 1,
   },
   {
      id: 5,
      name: 'Projects',
      url: '/projects',
      activeLink: 2,
   },
   {
      id: 6,
      name: 'Contact',
      url: '/#contacts',
      activeLink: 1,
   },
];

export const aboutDesc = [
   {
      id: 1,
      paragraph:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore laborum aperiam deleniti laudantium nisi suscipit quae in cumque vel vero temporibus facere quia molestiae accusantium, iusto odio, nobis veniam.',
   },
   {
      id: 2,
      paragraph:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore laborum aperiam deleniti laudantium nisi suscipit quae in cumque ',
   },
   // {
   //    id: 3,
   //    paragraph:
   //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore laborum aperiam deleniti laudantium ',
   // },
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
      title: 'Responsive',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius nesciunt culpa iste, porro repellat. Ullam minus culpa ut nesciunt quos, asperiores corrupti, odio debitis necessitatibus maxime itaque enim odit.',
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
