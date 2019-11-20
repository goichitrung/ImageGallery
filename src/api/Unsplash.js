//import axios package
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 03de9c84e3874d71ca07f7a0f6f6d93b76d80c0e460133f4879d4d99aeb4d2b8"
  }
});
