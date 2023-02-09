import React from "react";

import PropTypes from "prop-types";
import {ReactComponent as SearchIcon} from '../../assets/search.svg';
import '../index.css';

export class Searchbar extends React.Component {
  state = {
    searchText: ''
  }

  onSubmit = () => {
    this.props.getSearchData(this.state.searchText)
  }

  onChange = (changeEvent) => {
    const { value } = changeEvent.target;
    this.setState({ searchText: value })
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="button" className="SearchForm-button" onClick={this.onSubmit}>
            <SearchIcon className="SearchForm-icon" />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    )
  }
}

Searchbar.propTypes = {
  getSearchData: PropTypes.func.isRequired
}

export default Searchbar;
