import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-doit.herokuapp.com",
});