import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={8} md={12} sm={24} xs={24}>
              <Language>{t("E-mail")}</Language>
              <Para>{t(`Imate pitanja? Stojimo na raspolaganju.`)}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Pošalji poruku`)}</Chat>
              </a>
            </Col>

            <Col lg={8} md={12} sm={24} xs={24}>
              <Language>{t("Telefon")}</Language>
              <Para>00385 99 1234 567</Para>
            </Col>

            <Col lg={8} md={12} sm={24} xs={24}>
              <Language>{t("Potražite nas")}</Language>
              <Row>
                <SocialLink href="https://www.facebook.com" src="facebook.svg" />
              </Row>
            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <div style={{ borderTop: "1px solid #ddd", margin: "20px 0" }}></div>
            </Col>
          </Row>

          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <Col>
            <a href="/sanja-milanovic" aria-label="homepage">
              <LogoContainer>
                <SvgIcon
                  src="sm2.svg"
                  aria-label="homepage"
                  width="40px"
                  height="40px"
                />
              </LogoContainer>
            </a>
            </Col>
            <Col>
            <FooterContainer>
              © 2024 Sanja Milanović | Powered by Sanja Milanović
            </FooterContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);