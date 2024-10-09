import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: {};
  id: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, id, t }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection id={id}>
      <Fade duration={2500} triggerOnce> 
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Fade>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);