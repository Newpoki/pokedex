import styled from "@emotion/styled";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundIllustration from "../../icons/404.png";
import { theme } from "../../theme";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Root>
      <Title>Error 404</Title>
      <IllustrationWrapper>
        <Illustration src={NotFoundIllustration} />
      </IllustrationWrapper>

      <Explanation>It looks like we can not find what you're looking for.</Explanation>

      <Button onClick={handleGoHome}>Go back to home</Button>
    </Root>
  );
};

const Root = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: ${theme.spacings.xxxl}px;
  color: ${theme.colors.text.black};
`;

const IllustrationWrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.spacings.xxl}px;
`;

const Illustration = styled.img`
  width: 100%;
`;

const Explanation = styled.p`
  font-size: 18px;
  color: ${theme.colors.text.black};
  margin-bottom: ${theme.spacings.xl}px;
`;

const Button = styled.button`
  background-color: ${theme.colors.backgroundTypes.electric};
  border: none;
  padding: ${theme.spacings.m}px;
  color: ${theme.colors.text.black};
  display: block;
  margin: 0 auto;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
