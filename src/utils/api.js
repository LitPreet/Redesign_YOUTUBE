import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {  
  params: {
    hl: 'hi',
    gl: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': '8ee52d8142msh7f633a74675adb9p178c50jsn03e532b04131',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async(url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
