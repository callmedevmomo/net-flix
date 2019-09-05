import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HiddenRank = styled.div`
  font-size: 15px;
  padding: 20px 30px;
  position: absolute;
  background-color: rgba(0, 30, 50, 0.7);
  border-radius: 5px;
  z-index: 1;
  font-weight: 600;
  color: #b2bec3;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  font-style: italic;
`;

const FullStar = styled.div`
  padding: 0px 2px;
  color: ${props => (props.star ? "#0984e3" : "black")};
  opacity: ${props => (props.star ? 1 : 0.3)};
`;
const StarState = styled.div`
  display: flex;
  padding: 0px 3px;
`;
const StarRank = styled.div`
  display: flex;
  margin-left: 15px;
  background-color: #b2bec3;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  border-radius: 5px;
  &:hover {
    ${FullStar} {
      opacity: 0;
    }
    ${HiddenRank} {
      opacity: 1;
    }
  }
`;
const Rank = ({ vote_average }) =>
  vote_average ? (
    <>
      <StarRank>
        {Math.floor(vote_average / 2) <= 1 ? (
          <>
            <StarState>
              <FullStar star={true}>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <HiddenRank>Rank : {vote_average} / 10</HiddenRank>
            </StarState>
          </>
        ) : Math.floor(vote_average / 2) > 1 &&
          Math.floor(vote_average / 2) <= 2 ? (
          <>
            <StarState>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <HiddenRank>Rank : {vote_average} / 10</HiddenRank>
            </StarState>
          </>
        ) : Math.floor(vote_average / 2) > 2 &&
          Math.floor(vote_average / 2) <= 3 ? (
          <>
            <StarState>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar>★</FullStar>
              <FullStar>★</FullStar>
              <HiddenRank>Rank : {vote_average} / 10</HiddenRank>
            </StarState>
          </>
        ) : Math.floor(vote_average / 2) > 3 &&
          Math.floor(vote_average / 2) <= 4 ? (
          <>
            <StarState>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar>★</FullStar>
              <HiddenRank>Rank : {vote_average} / 10</HiddenRank>
            </StarState>
          </>
        ) : (
          <>
            <StarState>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <FullStar star={true}>★</FullStar>
              <HiddenRank>Rank : {vote_average} / 10</HiddenRank>
            </StarState>
          </>
        )}
      </StarRank>
    </>
  ) : null;

Rank.propTypes = {
  vote_average: PropTypes.number.isRequired
};

export default Rank;
