import { lazy } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import HypnotherapyContent from "../../content/HypnotherapyContent.json";
import AcupunctureContent from "../../content/AcupunctureContent.json";
import ContactContent from "../../content/ContactContent.json";

import { Divider } from "../../styles/divider";
import { SvgIcon } from "../../common/SvgIcon";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      
      <ContentBlock
        direction="right"
        title={
          <SvgIcon 
            src="sanja-milanovic-signature2.svg"
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
          />
        }
        content={IntroContent.text}
        button={IntroContent.button}
        icon="sanja-milanovic.png"
        iconSize={{ width: "350px", height: "auto" }}
        id="intro"
      />

      <MiddleBlock
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        id="about"
      />
      <Divider />


      <ContentBlock
        direction="left"
        title={HypnotherapyContent.title}
        content={HypnotherapyContent.text}
        section={HypnotherapyContent.section}
        id="hypnotherapy"
      >
        <Carousel 
        autoPlay 
        interval={3000} 
        infiniteLoop 
        showThumbs={true}
        showStatus={false}
        showArrows={false}
        transitionTime={1000}
        swipeScrollTolerance={5}>
          {HypnotherapyContent.images.map((img, index) => (
            <div key={index}>
              <img 
              src={img} 
              alt={`Hypnotherapy ${index + 1}`} 
              style={{ width: "100%", height: "auto" }} 
              />
            </div>
          ))}
        </Carousel>
      </ContentBlock>

      <Divider />

      <ContentBlock
        direction="right"
        title={AcupunctureContent.title}
        content={AcupunctureContent.text}
        section={AcupunctureContent.section}
        id="acupuncture"
      >
        <Carousel 
        autoPlay 
        interval={3000} 
        infiniteLoop 
        showThumbs={true}
        showStatus={false}
        showArrows={false}
        transitionTime={1000}
        swipeScrollTolerance={5}>
          {AcupunctureContent.images.map((img, index) => (
            <div key={index}>
              <img 
              src={img} 
              alt={`Acupuncture ${index + 1}`} 
              style={{ width: "100%", height: "auto" }} 
              />
            </div>
          ))}
        </Carousel>
      </ContentBlock>

      <Divider />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </Container>
  );
};

export default Home;
