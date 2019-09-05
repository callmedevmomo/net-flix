import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const opacity = keyframes`
  from {
      opacity:0;
  }
  to{
     
    opacity: 1;
  }

`;
const Container = styled("div")`
  display: flex;
  align-items: center;
  animation: ${opacity} 1.5s ease-in-out;
`;
const VideoBox = styled.div`
  font-size: 12px;
  color: whitesmoke;
  opacity: 0.8;
`;
const GoUrl = styled.a`
  display: flex;
  align-items: center;
`;

const DesignBox = styled.div``;
const DesignSpan = styled.span`
  font-size: 20px;
`;

const AwesomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  &:hover {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 3px;
    transition: all 0.3s ease-in-out;
  }
`;
const Video = ({ videos, name }) => (
  <>
    <Container>
      <GoUrl href={`http://youtube.com/watch?v=${videos}`} target="_blank">
        <AwesomeBox>
          <DesignBox>
            <DesignSpan>
              <span role="img" aria-label="videos">
                🍿
              </span>
            </DesignSpan>
          </DesignBox>
          <VideoBox>{name && name.length > 18 ? `${name}...` : name}</VideoBox>
        </AwesomeBox>
      </GoUrl>
    </Container>
  </>
);

Video.propTypes = {
  videos: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Video;
