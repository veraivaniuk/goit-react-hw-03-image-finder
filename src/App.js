import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import pixabayApi from "./services/pixabay-api";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = {
    images: [],
    largeImageURL: "",
    tags: "",
    currentPage: 1,
    inputQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputQuery !== this.state.inputQuery) {
      this.fetchImages();
    }
  }

  onSearch = ({ query }) => {
    this.setState({
      inputQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchImages = () => {
    pixabayApi
      .fetchImages(this.state.inputQuery, this.state.currentPage)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  onModal = ({ largeImageURL, tags }) => {
    console.log(this.state);
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery images={this.state.images} onClick={this.onModal} />
        {this.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
          ></Modal>
        )}
      </div>
    );
  }
}
