import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = (searchQuery, page) => {
    
    const axiosOptions = {
        params: {
            key: '45500129-782b0efec7a4b6e4cb35c382f',
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
        },
    };
    
    return axios.get(`/api/`, axiosOptions);
}

