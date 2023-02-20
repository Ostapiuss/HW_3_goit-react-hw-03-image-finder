import React from "react";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

import { getImagesByCategory } from "../api/gellary-api";

export class App extends React.Component {
  state = {
    gallery: [],
    searchText: '',
    isUpdated: true,
    perPage: 0,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.perPage !== this.state.perPage) {
      getImagesByCategory(this.state.searchText, this.state.perPage).then((data) => {
        this.setState({
          gallery: data.hits,
          isUpdated: true,
          perPage: this.state.perPage
        })
      });
    }
  }

  getSearchData = (searchText) => {
    this.setState({ searchText, perPage: 12 });
  }

  uploadMoreImages = () => {
    this.setState({ isUpdated: false });
    this.setState({
      perPage: this.state.perPage + 12
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar getSearchData={this.getSearchData} />
        <ImageGallery
          images={this.state.gallery}
          uploadMoreImages={this.uploadMoreImages}
          isUpdated={this.state.isUpdated}
        />
      </div>
    );
  }
}
