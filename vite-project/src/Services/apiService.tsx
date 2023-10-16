import axios from 'axios';

export const getSuggestions = async (query) => {
  const payload = {
    method: 'GET',
    url: 'https://wayfair.p.rapidapi.com/auto-complete',
    params: {
      query: query // Pass the search text as a query parameter
    },
    headers: {
      'X-RapidAPI-Key': '6a5866ee0fmshb6d3cc4f558ed78p1ef313jsn69142e3e89f5', // Replace with your RapidAPI key
      'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(payload);
    console.log(response.data["response"])
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export const getProductSerach = async (query) => {
    const options = {
      method: 'GET',
      url: 'https://wayfair.p.rapidapi.com/products/search',
      params: {
        keyword: query,
        sortby: '0',
        curpage: '1',
        itemsperpage: '48'
      },
      headers: {
        'X-RapidAPI-Key': '6a5866ee0fmshb6d3cc4f558ed78p1ef313jsn69142e3e89f5', // Replace with your RapidAPI key
        'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data["response"])
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
