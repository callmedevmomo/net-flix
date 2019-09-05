import React from "react";
import CollectionsPresenter from "./CollectionsPresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    collections: []
  };
  async getCollections() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const { data: collections } = await moviesApi.collection(id);
      this.setState({ collections });
      console.log(collections);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getCollections();
  }

  render() {
    return <CollectionsPresenter {...this.state} />;
  }
}
