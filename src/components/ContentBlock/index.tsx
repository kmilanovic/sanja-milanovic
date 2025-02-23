import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper
} from "./styles";

const ContentBlock = ({
  icon,
  iconSize,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  children, 
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade duration={2500} triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
          <Col lg={11} md={11} sm={12} xs={24}>
            {children ? (
              children
            ) : icon ? (
              <SvgIcon
                src={icon}
                width={iconSize?.width || "100%"}
                height={iconSize?.height || "100%"}
              />
            ) : null}
          </Col>

          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {typeof title === "string" ? <h6>{t(title)}</h6> : title}
              <Content>{t(content)}</Content>

              {button && button.length > 0 && (
                <ButtonWrapper>
                  {button.map((item, id) => {
                    if (!item.scrollTo) return null;
                    return (
                      <Button key={id} color={item.color} onClick={() => scrollTo(item.scrollTo!)}>
                        {t(item.title)}
                      </Button>
                    );
                  })}
                </ButtonWrapper>
              )}

              {section && section.length > 0 && (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section.map((item, index) => (
                      <Col key={index} span={11}>
                         <SvgIcon 
            src={item.icon}  // 👈 Ensure this receives the full path from JSON
            width="60px" 
            height="60px" 
          />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
