import axios from 'axios';

const BASE_URL = `https://mock-api.driven.com.br/api/v4/driven-plus`;


function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth}`
    }
  };
  return config;
}

function postSignIn(infos) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, infos);
  return promise;
}

function postLogin(infos) {
  const promise = axios.post(`${BASE_URL}/auth/login`, infos);
  return promise;
}

function getPlans() {
  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, createHeaders());
  return promise;
}

function getPlan(id) {
  const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${id}`, createHeaders());
  return promise;
}

function postSubsorChange(infos) {
  const promise = axios.post(`${BASE_URL}/subscriptions`, infos, createHeaders());
  return promise;
}

function postDelete() {
  const promise = axios.delete(`${BASE_URL}/subscriptions`, createHeaders());
  return promise;
}


export { postSignIn, postLogin, getPlans, getPlan, postSubsorChange, postDelete };