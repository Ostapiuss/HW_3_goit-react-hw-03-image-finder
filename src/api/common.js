import axios from "axios";

const LICENSE_KEY = '33487199-baec2a1aa2b9e1816952719c7';
const BASE_URL = 'https://pixabay.com/api';
export const QUERY = `?q=cat&page=1&key=${LICENSE_KEY}&image_type=photo&orientation=horizontal`;

export const HTTP = {
  get(url) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/${url}`,
    }).then(res => res.data)
  }
}
