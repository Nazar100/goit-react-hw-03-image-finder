import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import requestApi from './services/searchPhotos';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    photos: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    largeUrl: '',
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null,
    });
  };

  fetchPhotos = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    requestApi(options)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });

        this.scrollDown();
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openLargePhoto = ({ target }) => {
    const url = target.dataset.url;
    this.setState({
      largeUrl: url,
    });
  };

  scrollDown = () => {
    if (this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { photos, showModal, largeUrl, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = photos.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          photos={photos}
          openModal={this.toggleModal}
          openLargePhoto={this.openLargePhoto}
        />
        {isLoading && (
          <Loader
            className="Loader"
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )}
        {error && (
          <p className="error">Whoops, something went wrong: {error.message}</p>
        )}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchPhotos} />}
        {showModal && <Modal largeUrl={largeUrl} onClose={this.toggleModal} />}
        <ToastContainer />
      </>
    );
  }
}

export default App;
