import axios from 'axios';

const BASE_URL = `https://mock-api.driven.com.br/api/v4/driven-plus`;

function postCadastro(infos) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, infos);
  return promise;
}

// {
// 	email: "fulano@email.com",
// 	name: "Fulano",
// 	cpf: "111.111.111-11",
// 	password: "123"
// }

function postLogin(infos) {
  const promise = axios.post(`${BASE_URL}/auth/login`, infos);
  return promise;
}

// {
// 	email: "...",
// 	password: "..."
// }

function getPlanos(token) {
  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, token);
  return promise;
}

function getPlano(id, token) {
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${id}`, token);
    return promise;
}

function postAssinarMudarPlano(token) {
    const promise = axios.post(`${BASE_URL}/subscriptions`, token);
    return promise;
}


function postAssinarMudarPlano(token) {
    const promise = axios.delete(`${BASE_URL}/subscriptions`, token);
    return promise;
}


export { postCadastro, postLogin, getPlanos, getPlano, postAssinarMudarPlano, postAssinarMudarPlano};