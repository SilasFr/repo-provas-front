import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function postSignUp(email, password) {
  const body = { email, password };
  return axios.post(`${BASE_URL}/sign-up`, body);
}

async function postSignIn(email, password) {
  const body = { email, password };
  return axios.post(`${BASE_URL}/sign-in`, body);
}

const api = { postSignUp, postSignIn };

export default api;
