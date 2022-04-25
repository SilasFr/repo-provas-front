import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: token,
    },
  };
}

async function postSignUp(email, password) {
  const body = { email, password };
  return axios.post(`${BASE_URL}/sign-up`, body);
}

async function postSignIn(email, password) {
  const body = { email, password };
  return axios.post(`${BASE_URL}/sign-in`, body);
}

async function validateSession(token) {
  const config = createConfig();
  return axios.get(`${BASE_URL}/session`, config);
}

async function getTests(token, query) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/tests?${query}`, config);
}

const api = { postSignUp, postSignIn, validateSession, getTests };

export default api;
