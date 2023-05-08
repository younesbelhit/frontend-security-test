import axios from 'axios';

export const loginApi = data =>
  axios({
    method: 'POST',
    url: 'https://dummyjson.com/auth/login',
    data,
  });

export const registerApi = data =>
  axios({
    method: 'POST',
    url: 'https://dummyjson.com/users/add',
    data,
  });

export const findByUsernameApi = username =>
  axios({
    method: 'GET',
    url: `https://dummyjson.com/users/filter?key=username&value=${username}`,
  });
