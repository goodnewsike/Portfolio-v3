import React from 'react';
import Links from '../Links';
import {socialLinks} from '../../_helpers/routes';

const SocialLinks = ({socialClass, linksClass}) => {
   return (
      <div className={socialClass}>
         <Links linksClass={linksClass} data={socialLinks} />
      </div>
   );
};

export default SocialLinks;
