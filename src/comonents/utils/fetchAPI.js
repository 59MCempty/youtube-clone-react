import axios from "axios";


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const key = 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
// const key = 'fdd335643cmsh6659ae93410d790p18864bjsn0ea16d8c8313'

const options = {
    // method: 'GET',
    url: BASE_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};