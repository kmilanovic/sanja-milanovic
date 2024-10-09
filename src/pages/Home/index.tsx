import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import HypnotherapyContent from "../../content/HypnotherapyContent.json";
import AcupunctureContent from "../../content/AcupunctureContent.json";
import ContactContent from "../../content/ContactContent.json";
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
        title={<SvgIcon src="sanja-milanovic-signature.svg" width="600px" height="400px" />} 
        content={IntroContent.text}
        button={IntroContent.button}
        icon="ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.webp"
        id="intro"
      />
      <MiddleBlock
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        id="about"
      />
      <ContentBlock
        direction="left"
        title={HypnotherapyContent.title}
        content={HypnotherapyContent.text}
        section={HypnotherapyContent.section}
        icon="Hypnotherapy.jpg"
        id="hypnotherapy"
      />
      <ContentBlock
        direction="right"
        title={AcupunctureContent.title}
        content={AcupunctureContent.text}
        section={AcupunctureContent.section}
        icon="acupuncture.jpg"
        id="acupuncture"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
