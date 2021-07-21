import axios from "axios";

const API_KEY = "21864216-f735fea3a07168d74f35b2198";

const fetchImages = (searchQuery, currentPage) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
