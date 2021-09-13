import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;

    return (
      <ul className="ImageGallery">
        {photos.map(photo => (
          <ImageGalleryItem
            key={photo.webformatURL}
            name={photo.id}
            photoUrl={photo.webformatURL}
            largeImageURL={photo.largeImageURL}
            onClick={() => this.props.onSelect(photo.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  photos: PropTypes.array,
  onSelect: PropTypes.func,
};
export default ImageGallery;
