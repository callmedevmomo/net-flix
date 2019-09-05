import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Txt = styled.div`
  text-align: center;
  opacity: 1;
  padding-top: 40px;
  color: gray;
`;
const TestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const BoxContainer = styled.div`
  width: 110px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #b2bec3;
  transform: translate(30px, -10px);
  opacity: 0;
  transition: all 1s linear;
  line-height: 1.5;
  z-index: 1;
`;

const PosterBox = styled.div`
  width: 110px;
  height: 150px;
  background: url(${props => props.logo}) center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  margin-right: 20px;
  &:hover {
    ${BoxContainer} {
      opacity: 1;
    }
  }
`;

const Collections = ({ id, name, poster_path }) => (
  <Container>
    <TestBox>
      <PosterBox
        logo={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : require("../assets/noPosterSmall.png")
        }
      >
        <BoxContainer>
          <Txt>{name}</Txt>
        </BoxContainer>
      </PosterBox>
    </TestBox>
  </Container>
);
Collections.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string
};
export default Collections;
