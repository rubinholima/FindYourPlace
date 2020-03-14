import axios from "axios";

const BASEURL = "https://www.triposo.com/api/20190906/location.json?part_of=";
const APIKEY = "&account=22YA2RQ7&token=g2r60v4hgiq3zyo304rc0p3kfkh19zd2";

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function (queTour) {
    return axios.get(BASEURL + queTour + APIKEY);
  }
};


