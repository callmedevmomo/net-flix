import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  error,
  loading,
  serachTerm,
  handleSubmit
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  serachTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
