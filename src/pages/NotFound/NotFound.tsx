import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
`;

const Message = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const HomeLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Title>404 - Stranica nije pronađena!</Title>
      <Message>Oops! Stranica koju tražite ne postoji.</Message>
      <HomeLink to="/">Povratak na naslovnu</HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFound;