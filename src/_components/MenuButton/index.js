import React from 'react';
import {Motion, spring, presets} from 'react-motion';

const MenuButton = ({className, open}) => {
   const style = {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
   };
   return (
      <svg width="28" height="28" className={className} style={style}>
         <Motion
            style={{
               x: spring(open ? 1 : 0, presets.wobbly),
               y: spring(open ? 0 : 1, presets.wobbly),
            }}>
            {({x, y}) => (
               <g stroke="rgb(0, 192, 160)" strokeWidth="3" strokeLinecap="round">
                  <line transform={`translate(${x * 3.5},${x * 0.5}) rotate(${x * 45}, 2, 5)`} x1="2" y1="5" x2="26" y2="5" />
                  <line transform={`translate(${x * -30})`} opacity={y} x1="2" y1="14" x2="26" y2="14" />
                  <line transform={`translate(${x * 3.5},${x * -0.5}) rotate(${x * -45}, 2, 23)`} x1="2" y1="23" x2="26" y2="23" />
               </g>
            )}
         </Motion>
      </svg>
   );
};

export default MenuButton;
