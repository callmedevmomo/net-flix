import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      loading: true,
      error: null,
      result: null,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId)); //request data;
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { loading, error, result } = this.state;
    return <DetailPresenter loading={loading} error={error} result={result} />;
  }
}
