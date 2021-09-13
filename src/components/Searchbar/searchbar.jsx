import { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    photo: '',
  };

  handleNameChange = event => {
    this.setState({ photo: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.photo.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.photo);
    this.setState({ photo: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            value={this.state.photo}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
