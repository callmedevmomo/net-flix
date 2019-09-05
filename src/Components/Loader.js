import React from "react";
import styled, { keyframes } from "styled-components";

const dotAnimation = keyframes`
  0% {
    transform: none;
  }
  25% {
    transform: scale(2);
  }
  50% {
    transform: none;
  }
  100% {
    transform: none;
  }
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 200px;
  position: fixed;
  top: 400px;
  left: 200px;
`;
const Line = styled.div`
  background-color: #ecf0f1;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  animation: ${dotAnimation} 1.5s ease-in-out infinite;
  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
  :nth-child(4) {
    animation-delay: 0.3s;
  }
  :nth-child(5) {
    animation-delay: 0.4s;
  }
`;

export default () => (
  <>
    <Container>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </Container>
  </>
);
