import { Component } from 'react';
import SearchBar from './components/Searchbar/searchbar';
import ImageGallery from './components/ImageGallery/imageGallery';
import Button from './components/Button/button';
import photoAPI from './components/PhotoApi/photoApi';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    name: '',
    photos: [],
    page: 1,
    status: 'idle',
    showButton: false,
    modalIsOpen: null,
  };

  handleFormSubmit = name => {
    this.setState({ name, status: 'load', photos: [], page: 1 });
  };

  handleSelectImage = largeImageUrl => {
    this.setState({ modalIsOpen: largeImageUrl });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: null });
  };

  componentDidUpdate() {
    const nextName = this.state.name;
    const nextPage = this.state.page;
    if (this.state.status === 'load') {
      photoAPI.fetchPhoto(nextName, nextPage).then(photos => {
        if (photos.hits.length === 0 && this.state.page === 1) {
          this.setState({ status: 'idle', showButton: false });
          return;
        }
        this.setState({
          photos: [...this.state.photos, ...photos.hits],
          status: 'resolved',
          showButton: true,
        });
      });
    }
  }

  onButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'load',
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          photos={this.state.photos}
          onSelect={this.handleSelectImage}
        />
        {this.state.status === 'load' && <Loader />}
        {this.state.showButton && <Button onClickLoadMore={this.onButton} />}
        {this.state.modalIsOpen && (
          <Modal
            largeImageURL={this.state.modalIsOpen}
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
