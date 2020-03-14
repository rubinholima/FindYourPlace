import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=PZfMcJG8iWOXERGCKxCSLOrRXG0Iwz8d&limit=5&limit=10";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
