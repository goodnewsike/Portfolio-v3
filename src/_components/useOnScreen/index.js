import {useEffect, useState} from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      if (ref.current == null) return;
      const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {rootMargin});
      observer.observe(ref.current);
      return () => {
         if (ref.current == null) return;
         // eslint-disable-next-line react-hooks/exhaustive-deps
         observer.unobserve(ref.current);
      };
   }, [ref, rootMargin]);

   return isVisible;
}

// HOW TO USE
// const headerTwoRef = useRef()
// const visible = useOnScreen(headerTwoRef, "-100px")

//<h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
