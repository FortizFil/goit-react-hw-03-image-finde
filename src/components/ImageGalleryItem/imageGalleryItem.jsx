import { Component } from 'react';
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  handleOnClick = e => {
    this.props.onClick(this.props.largeImageURL);
  };
  render() {
    return (
      <li className="ImageGalleryItem" onClick={this.handleOnClick}>
        <img
          src={this.props.photoUrl}
          alt={this.props.name}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.number,
  onClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
