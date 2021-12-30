import React, {useEffect, useState} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import SocialLinks from '../../_components/SocialLinks';
import Slider from 'react-slick';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

// import profileImg from '../../_assets/images/goodnews-3.png';
import img1 from '../../_assets/images/laptop-1.jpg';
import img2 from '../../_assets/images/goodnews-6.jpg';
import img3 from '../../_assets/images/code.jpg';

const Hero = (props) => {
   const img = [
      {id: 1, img: img1},
      {id: 2, img: img2},
      {id: 3, img: img3},
   ];
   const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
   };

   const [offset, setOffset] = useState(0);
   useEffect(() => {
      function handleScroll() {
         setOffset(window.pageYOffset);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [offset]);

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="hero">
         <MDBContainer fluid className="hero p-0 position-relative section">
            <Slider {...settings}>
               {img.map((itm) => (
                  <div key={itm.id} className="imgs img-fluid">
                     <img
                        src={itm.img}
                        style={{
                           // filter: `blur(4px)`,
                           transform: `translateY(${offset * 0.5}px)`,
                        }}
                        alt="Carousel__img"
                        className=" h-100 w-100"
                     />
                  </div>
               ))}
            </Slider>
            <MDBContainer fluid className="__container h-100 position-absolute d-flex align-items-center justify-content-center">
               <MDBContainer className="d-flex align-items-center justify-content-center">
                  <MDBRow className="m-0 content">
                     <article className="inner d-flex flex-column align-items-center justify-content-center">
                        {/* <div className="profile-img">
                           <img src="" alt="" className="h-100 w-100" />
                        </div> */}
                        <h1 className="py-2">I'm Goodnews Ike</h1>
                        <p data-aos="fade-up" className="pb-4">
                           Frontend Developer | React.js
                        </p>
                        <SocialLinks socialClass="social-links" linksClass="links" />
                     </article>
                  </MDBRow>
               </MDBContainer>
            </MDBContainer>
         </MDBContainer>
      </Element>
   );
};

export default Hero;
