import {useState} from 'react';

// DEFINE MY OWN TOGGLE HOOK
export const useModal = (initialVisible = false) => {
   const [isVisible, updateVisible] = useState(initialVisible);

   const toggleModal = () => {
      updateVisible((prev) => !prev);
   };

   return {isVisible, toggleModal};
};
