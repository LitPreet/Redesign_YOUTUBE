import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {  
  params: {
    hl: 'hi',
    gl: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': 'd0b42e193emsh7b02bcd65a5666fp1afe84jsn5b916efffccd',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async(url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}