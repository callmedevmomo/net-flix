import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Collection from "Components/Collection";

const Conatiner = styled.div`
  padding: 20px;
`;

const CollectionsPresenter = ({ loading, collections }) => (
  <>
    <Helmet>
      <title>Collections | Netflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Conatiner>
        <Collection
          name={collections.name}
          poster_path={collections.poster_path}
          overview={collections.overview}
          backdrop_path={collections.backdrop_path}
          test={collections.parts}
        ></Collection>
      </Conatiner>
    )}
  </>
);

CollectionsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string
};

export default CollectionsPresenter;
