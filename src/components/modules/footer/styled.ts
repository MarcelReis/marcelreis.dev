import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background-color: var(--base-high);
  display: flex;
  height: 50px;
  justify-content: center;
  border-top: 2px var(--base-low) solid;

  animation: ${fadeIn} 1s ease 0s;
  a {
    --base: var(--contrast);
    --base-low: var(--contrast-low);
  }
`;

export const Button = styled.a`
  width: 48px;
  height: 48px;
  padding: 8px;
  margin: 0 16px;
  color: var(--base);

  transition: color 0.2s ease, transform 0.2s ease;

  :hover {
    color: var(--base-low);
    transform: scale(1.05) translateY(-8px);
  }
`;