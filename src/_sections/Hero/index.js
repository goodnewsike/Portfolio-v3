import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import {Fade} from 'react-reveal';
import SocialLinks from '../../_components/SocialLinks';
import Slider from 'react-slick';
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

   return (
      <Element name="hero">
         <MDBContainer ref={props.ref} fluid className="hero p-0 position-relative section">
            <Slider {...settings}>
               {img.map((itm) => (
                  <div key={itm.id} className="imgs img-fluid">
                     <img src={itm.img} alt="Carousel__img" className=" h-100 w-100" />
                  </div>
               ))}
            </Slider>
            <MDBContainer fluid className="__container h-100 position-absolute d-flex align-items-center justify-content-center">
               <MDBContainer className="d-flex align-items-center justify-content-center">
                  <MDBRow className="m-0 content">
                     <article className="inner d-flex flex-column align-items-center justify-content-center">
                        <h1 className="py-2">I'm Goodnews Ike</h1>
                        <Fade top duration={2500} delay={3000}>
                           <p className="pb-4">Frontend Developer | React.js</p>
                        </Fade>
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
