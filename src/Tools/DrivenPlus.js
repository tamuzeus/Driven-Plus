import axios from 'axios';

const BASE_URL = `https://mock-api.driven.com.br/api/v4/driven-plus`;

function postSignIn(infos) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, infos);
  return promise;
}


function postLogin(infos) {
  const promise = axios.post(`${BASE_URL}/auth/login`, infos);
  return promise;
}

function getPlans(token) {
  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, token);
  return promise;
}

function getPlan(id, token) {
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${id}`, token);
    return promise;
}

function postSubsorChange(infos, token) {
    const promise = axios.post(`${BASE_URL}/subscriptions`, infos, token);
    return promise;
}

function postDelete(token) {
    const promise = axios.delete(`${BASE_URL}/subscriptions`, token);
    return promise;
}


export { postSignIn, postLogin, getPlans, getPlan, postSubsorChange, postDelete};