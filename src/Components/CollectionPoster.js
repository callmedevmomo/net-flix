import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 200px;
  background-size: cover;
  border-radius: 10px;
  width: 110%;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin-bottom: 15px;
`;

const Rating = styled.span`
  position: absolute;
  opacity: 0;
  top: 100px;
  left: 40px;
  font-weight: bolder;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
  text-align: center;
`;

const Year = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const CollectionPoster = ({
  id,
  imageUrl,
  title,
  year,
  isMovie = false,
  vote_average
}) => (
  <a
    href={
      isMovie
        ? `/movie/${id}`
        : imageUrl
        ? `https://image.tmdb.org/t/p/original${imageUrl}`
        : null
    }
  >
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : null}
        />
        <Rating>
          <span role="img" aria-label="rating">
            {vote_average
              ? `⭐️${vote_average}/10`
              : imageUrl
              ? "Get Detail"
              : " "}
          </span>
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </a>
);

CollectionPoster.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default CollectionPoster;
