import React from 'react';
import {Helmet} from 'react-helmet';
// import Ico from '../assets/app-icon.svg';

export default function SEO({
   description = 'Goodnews Ogechukwu Ike portfolio made with gatsby.js',
   author = 'Goodnews Ogechukwu Ike',
   meta,
   viewport = 'width=device-width, initial-scale=1.0',
   title = 'Goodnews Ike || Portfolio',
   keywords = 'portfolio, react.js, reactjs, gatsby.js, gatsbyjs, portfolio, frontend, front-end, frontend developer, front-end developer, web, web development, programming',
}) {
   const metaData = [
      {
         name: `description`,
         content: description,
      },
      {
         name: `viewport`,
         content: viewport,
      },
      {
         property: `og:title`,
         content: title,
      },
      {
         property: `og:description`,
         content: description,
      },
      {
         property: `og:type`,
         content: `portfolio`,
      },
      {
         name: `twitter:card`,
         content: `summary`,
      },
      {
         name: `twitter:creator`,
         content: author,
      },
      {
         name: `twitter:title`,
         content: title,
      },
      {
         name: `twitter:description`,
         content: description,
      },
      {
         name: `keywords`,
         content: keywords,
      },
   ].concat(meta);
   return (
      <Helmet htmlAttributes={{lang: 'en'}}>
         <title>{title}</title>
         {metaData.map(({name, content}, i) => (
            <meta key={i} name={name} content={content} />
         ))}
         {/* <link rel="icon" href={Ico} /> */}
      </Helmet>
   );
}

SEO.defaultProps = {
   lang: `en`,
   meta: [],
};
