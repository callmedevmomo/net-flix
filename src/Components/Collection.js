import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Helmet from "react-helmet";
import CollectionPoster from "Components/CollectionPoster";
import Section from "Components/Section";
const opacity = keyframes`
  from {
      opacity:0;
  }
  to{
    opacity: 1;
  }

`;
const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 150px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 40%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 80vh;
  border-radius: 15px;
  margin-right: 50px;
  animation: ${opacity} 2s ease-in-out;
  margin-top: 100px;
`;

const Data = styled.div`
  width: 100%;
  margin-left: 50px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  width: 100%;
  margin-top: 10px;
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  padding: 30px;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const CompanyTxt = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1.5px solid #b2bec3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Collection = ({
  name,
  poster_path,
  overview,
  backdrop_path,
  test,
  isMovie
}) => (
  <Container>
    <Helmet>
      <title> {name} | Collections</title>
    </Helmet>
    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
    <Content>
      <Cover
        bgImage={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : require("../assets/noPosterSmall.png")
        }
      />
      <Data>
        <FlexContainer>
          <Title>{name}</Title>
        </FlexContainer>
        <CompanyTxt>Overview</CompanyTxt>
        <Overview>{overview}</Overview>
        <CompanyTxt>Enjoy Series</CompanyTxt>
        <Section>
          {test
            ? test.map(data => (
                <CollectionPoster
                  key={data.id}
                  id={data.id}
                  imageUrl={data.poster_path}
                  title={
                    data.original_title && data.original_title.length > 20
                      ? data.original_title.substr(0, 20) + "..."
                      : data.original_title
                  }
                  year={data.release_date && data.release_date.substr(0, 4)}
                  isMovie={true}
                  vote_average={data.vote_average}
                />
              ))
            : null}
          <CollectionPoster />
        </Section>
        <CompanyTxt>Original Poster</CompanyTxt>
        <Section>
          <a href={`https://image.tmdb.org/t/p/original${poster_path}`}>
            <CollectionPoster title={name} imageUrl={poster_path} />
          </a>
        </Section>
      </Data>
    </Content>
  </Container>
);
Collection.propTypes = {
  name: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  backdrop_path: PropTypes.string,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      release_date: PropTypes.string
    })
  ),
  isMovie: PropTypes.bool
};

export default Collection;
