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

const ProfileBox = styled.div`
  background: url(${props => props.profile}) center;
  background-size: cover;
  height: 150px;
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

const Profile = ({ credit_id, id, name, profile_path }) => (
  <Container>
    <TestBox>
      <ProfileBox
        profile={
          profile_path && profile_path !== null
            ? `https://image.tmdb.org/t/p/w300${profile_path}`
            : require("../assets/noPosterSmall.png")
        }
      >
        <BoxContainer>
          <Txt>{name}</Txt>
        </BoxContainer>
      </ProfileBox>
    </TestBox>
  </Container>
);

Profile.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default Profile;
