import {useLocation, matchPath} from 'react-router-dom';
import queryString from 'query-string';

export const useLocationCode = () => {
   const {pathname} = useLocation();

   const home = matchPath(pathname, '/home');
   const projects = matchPath(pathname, '/projects');

   if (home?.isExact || pathname === '/') {
      return 1;
   } else if (projects?.isExact) {
      return 2;
   } else {
      return 3;
   }
};

export const useQueryString = () => {
   const {search} = useLocation();

   if (search) {
      return {...queryString.parse(search)};
   }

   return {};
};
