import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    result: null
  };
  render() {
    const { loading, error, result } = this.state;
    return <DetailPresenter loading={loading} error={error} result={result} />;
  }
}
