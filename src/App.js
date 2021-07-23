import { Component } from "react";
import Searchbar from "./components/Searchbar";
import pixabayApi from "./services/pixabay-api";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import Container from "./components/Container";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      this.setState((prevState) => ({
        images: [],
        currentPage: 1,
      }));
      this.fetchImages();
    }
  }

  onSearch = ({ query }) => {
    if (query.trim() === "") {
      const notify = () => toast.warn(`Something went wrong`);
      return notify();
    }
    this.setState({
      inputQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchImages = () => {
    this.setState((prevState) => ({
      isLoading: true,
    }));
    pixabayApi
      .fetchImages(this.state.inputQuery, this.state.currentPage)
      .then((data) => {
        if (data.length === 0) {
          const notify = () => toast.warn(`Something went wrong`);
          return notify();
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        const notify = () => toast.warn(`Something went wrong`);
        return notify();
      })
      .finally(() => {
        this.setState((prevState) => ({
          isLoading: false,
        }));
      });
  };

  onModal = ({ largeImageURL, tags }) => {
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
      <Container>
        <Searchbar onSubmit={this.onSearch} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} onClick={this.onModal} />
        {this.state.images.length > 0 && (
          <button className="Button" type="button" onClick={this.fetchImages}>
            Load more
          </button>
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImageURL} alt={this.state.tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
