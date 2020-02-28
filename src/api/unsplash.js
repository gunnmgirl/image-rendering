import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NhovVBK3V49m4fPG4BguTx39pQ4qeYKibJ2uEJ7dfWU"
  }
});
