import React from "react";
import styled from "styled-components";
function StyledComponent(){
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Link = ({ className, children }) => (
  <button className={className}>
    {children}
  </button>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>

      <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
    </Wrapper>
  );
}
export default StyledComponent;