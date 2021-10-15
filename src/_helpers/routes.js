import {
   FaFacebookSquare,
   FaLinkedin,
   FaDribbbleSquare,
   FaBehanceSquare,
   FaTwitterSquare,
} from 'react-icons/fa';

export const socialLinks = [
   // {
   //    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
   //    url: 'https://www.github.com/goodnewsike',
   // },
   // {
   //    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
   //    url: 'https://www.codepen.io/',
   // },
   {
      icon: <FaLinkedin className="social-icon"></FaLinkedin>,
      url: 'https://www.linkedin.com/in/goodnewsike',
   },
   {
      icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
      url: 'https://www.dribbble.com/',
   },
   {
      icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
      url: 'https://www.behance.com',
   },
   {
      icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
      url: 'https://www.facebook.com/Gudniuzplanet',
   },
   {
      icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
      url: 'https://www.twitter.com/goodnews-ike',
   },
];

export const navbarLinks = [
   {
      name: 'home',
      url: '/',
      activeLink: 1,
   },
   {
      name: 'about',
      url: '/#about',
      activeLink: 1,
   },
   {
      name: 'experience',
      url: '/#experience',
      activeLink: 1,
   },
   {
      name: 'projects',
      url: '/projects',
      activeLink: 2,
   },
   {
      name: 'contacts',
      url: '/#contacts',
      activeLink: 1,
   },
];
