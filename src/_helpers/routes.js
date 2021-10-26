import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

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
      name: 'Home',
      url: '/',
      activeLink: 1,
   },
   {
      name: 'About',
      url: '/#about',
      activeLink: 1,
   },
   {
      name: 'Experience',
      url: '/#experience',
      activeLink: 1,
   },
   {
      name: 'Projects',
      url: '/projects',
      activeLink: 2,
   },
   {
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
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore laborum aperiam deleniti laudantium nisi suscipit quae in cumque vel vero temporibus facere quia molestiae accusantium, iusto odio, nobis veniam.',
   },
   {
      id: 3,
      paragraph:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore laborum aperiam deleniti laudantium nisi suscipit quae in cumque vel vero temporibus facere quia molestiae accusantium, iusto odio, nobis veniam.',
   },
];
