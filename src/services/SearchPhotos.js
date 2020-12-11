import axios from 'axios';

const KEY = '19419978-f0acf28c61118c5b5b844fb84';

const requestApi = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(responce => {
      if (responce.data.total) {
        return responce.data.hits;
      }
      return Promise.reject(new Error(`No photos of ${searchQuery}`));
    });
};

export default requestApi;
