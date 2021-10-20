import axios from "axios";

const API_KEY = "23926107-b5133ff0aaa254f46e578b146";

export const fetchImages = (searchImg, page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchImg}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
