import axios from "axios";


export default {
   
    getCountry: () => axios.get("/api/country"),
    saveCountry: (countryData) => axios.post("/api/country", countryData),
    deleteCountry: (id) => axios.delete("api/country/" + id)
};