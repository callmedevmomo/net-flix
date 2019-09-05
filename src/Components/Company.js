import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Txt = styled.div`
  text-align: center;
  opacity: 1;
  padding-top: 15px;
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

const LogoBox = styled.div`
  background: url(${props => props.logo}) center;
  background-size: contain;
  width: 80px;
  border-radius: 20px;
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

const Company = ({ logo_path, name, origin_country }) => (
  <Container>
    <TestBox>
      <LogoBox
        logo={
          logo_path
            ? `https://image.tmdb.org/t/p/w300${logo_path}`
            : require("../assets/noPosterSmall.png")
        }
      >
        <BoxContainer>
          <Txt>{name}</Txt>
          {origin_country ? <Txt>Country : {origin_country}</Txt> : null}
        </BoxContainer>
      </LogoBox>
    </TestBox>
  </Container>
);

Company.propTypes = {
  logo_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  origin_country: PropTypes.string
};

export default Company;
