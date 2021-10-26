import {useState, useEffect} from 'react';

/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

// Adapted from https://coolhead.medium.com/smooth-navbar-hide-and-show-on-scroll-using-custom-react-hooks-c29b7ad457d6

export default function useScroll() {
   // storing this to get the scroll direction
   const [lastScrollTop, setLastScrollTop] = useState(0);
   // the offset of the document.body
   const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
   // the vertical direction
   const [scrollY, setScrollY] = useState(bodyOffset.top);
   // the horizontal direction
   const [scrollX, setScrollX] = useState(bodyOffset.left);
   // scroll direction would be either up or down
   const [scrollDirection, setScrollDirection] = useState();

   const listener = (e) => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
      setLastScrollTop(-bodyOffset.top);
   };

   useEffect(() => {
      window.addEventListener('scroll', listener);
      return () => {
         window.removeEventListener('scroll', listener);
      };
   });

   return {
      scrollY,
      scrollX,
      scrollDirection,
   };

   //============== add the following css classes in usage =================
   // active: {
   //    visibility: "visible",
   //    transition: "all 0.5s"
   //  },
   //  hidden: {
   //    visibility: "hidden",
   //    transition: "all 0.5s",
   //    transform: "translateY(-100%)"
   //  }

   // import and use as follows:
   // const { y, x, scrollDirection } = useScroll();
   // <nav className="Header" style={scrollDirection === "down" ? styles.active: styles.hidden}   ></nav>
}
