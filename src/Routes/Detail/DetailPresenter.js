import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Rank from "Components/Rank";
import Videos from "Components/Videos";
import Company from "Components/Company";
import Collections from "Components/Collections";
import Profile from "Components/Profile";
import TVSeasons from "Components/TVSeasons";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 100px;
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
  height: 120%;
`;

const Cover = styled.div`
  width: 25%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 80%;
  border-radius: 20px;
  margin-right: 40px;
  position: fixed;
  right: 0;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.7;
  line-height: 1.5;
  width: 85%;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IMDB = styled.div`
  background-color: #e8b707;
  font-size: 14px;
  margin-left: 15px;
  border-radius: 4px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: black;
  &:hover {
    background-color: transparent;
    border: 4px solid #e8b707;
    color: white;
  }
`;
const DetailBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const CompanyBox = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  margin-right: 30px;
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
  margin-top: 10px;
`;

//refrence **

const ProductionCompanies = styled.ul`
  width: 100%;
  height: 130px;
  overflow: auto;
  white-space: nowrap;
  margin: 20px 0;
  border-radius: 5px;
  &:last-child {
    height: 280px;
  }
`;

const Production = styled.li`
  display: inline-block;
  margin: 20px;
`;

const Seasons = ProductionCompanies;
const Season = Production;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Netflix</title>
        <Loader />
      </Helmet>
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Netflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />

      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />

        <Data>
          <FlexContainer>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            {result.imdb_id ? (
              <>
                <IMDB>
                  <a
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDb
                  </a>
                </IMDB>
              </>
            ) : null}
            <Rank {...result} />
          </FlexContainer>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substr(0, 4)
                : result.first_air_date.substr(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.runtime !== null
                ? result.episode_run_time
                : "0"}{" "}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <CompanyTxt>Overview</CompanyTxt>
          <Overview>{result.overview}</Overview>
          {result.videos.results.length !== 0 ? (
            <>
              <CompanyTxt>Teaser</CompanyTxt>
              <Seasons>
                <DetailBox>
                  {result.videos.results.length !== 0
                    ? result.videos.results.map(data => (
                        <Season key={data.id}>
                          <Videos
                            key={data.id}
                            videos={data.key}
                            name={data.name}
                          />
                        </Season>
                      ))
                    : null}
                </DetailBox>
              </Seasons>
            </>
          ) : null}

          {result.production_companies.length !== 0 ? (
            <>
              <CompanyTxt>Company</CompanyTxt>
              <CompanyBox>
                {result.production_companies.map(data => (
                  <Company key={data.id} {...data} />
                ))}
              </CompanyBox>
            </>
          ) : null}
          {result.belongs_to_collection &&
          result.belongs_to_collection !== null ? (
            <>
              <CompanyTxt>
                Collections
                <Link to={`/collections/${result.belongs_to_collection.id}`}>
                  <IMDB>More</IMDB>
                </Link>
              </CompanyTxt>

              <CompanyBox>
                <Collections {...result.belongs_to_collection} />
              </CompanyBox>
            </>
          ) : null}
          {result.created_by && result.created_by.length !== 0 ? (
            <>
              <CompanyTxt>Created by</CompanyTxt>
              <CompanyBox>
                {result.created_by.map(data => (
                  <Profile
                    key={data.credit_id}
                    id={data.id}
                    name={data.name}
                    profile_path={data.profile_path}
                  />
                ))}
              </CompanyBox>
            </>
          ) : null}
          {result.seasons && result.seasons.length !== 0 ? (
            <>
              <CompanyTxt>Seasons</CompanyTxt>
              <Seasons>
                <CompanyBox>
                  {result.seasons.map(data => (
                    <Season key={data.id}>
                      <TVSeasons
                        key={data.id}
                        air_date={data.air_date}
                        id={data.id}
                        name={data.name}
                        poster_path={data.poster_path}
                      />
                    </Season>
                  ))}
                </CompanyBox>
              </Seasons>
            </>
          ) : null}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
