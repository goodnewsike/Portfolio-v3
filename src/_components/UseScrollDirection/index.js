import {useEffect, useState} from 'react';

// Adapted from https://javascript.plainenglish.io/custom-scrolling-direction-react-hook-f55558206ab6?source=search_post---------5

const UseScrollDirection = () => {
   const [scrollDirection, setScrollDirection] = useState(null);
   const [prevOffset, setPrevOffset] = useState(0);
   const toggleScrollDirection = () => {
      let scrollY = window.scrollY;
      if (scrollY === 0) {
         setScrollDirection(null);
      }
      if (scrollY > prevOffset) {
         setScrollDirection('down');
      } else if (scrollY < prevOffset) {
         setScrollDirection('up');
      }
      setPrevOffset(scrollY);
   };
   useEffect(() => {
      window.addEventListener('scroll', toggleScrollDirection);
      return () => {
         window.removeEventListener('scroll', toggleScrollDirection);
      };
   });
   return scrollDirection;

   // in usage import and call:
   // const scrollDirection = useScrollDirection()
   // then set the css properties
};

export default UseScrollDirection;
