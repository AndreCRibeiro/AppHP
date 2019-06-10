import axios from 'axios';
// import { LoginToken } from '../store/ducks/login';
// import store from '../store';

var URL = 'http://157.230.177.190';

const changeBaseURL = (baseUrl) => {
  URL = baseUrl;
  console.log('console do URL', URL)
}
const api = axios.create({
  baseURL: URL,
});

const tokenAuth = null;

const setToken = (token, matricula) => {
  axios.defaults.headers.common['authorization'] = `${token}`;
  axios.defaults.headers.common['matricula'] = `${matricula}`;
}

const user = {
  // realiza o login do usuario
  loginUser: data => {
    console.log('user request', URL)
    return axios.post(`${URL}/user/login`, data, {
      headers: {}
    },
    )
  },

  checkClass: () => {
    return api.get('/student', {
      headers: {}
    },
    )
  },

  testes: () => {
    return api.get('/test', {
      headers: {}
    },
    )
  },

  enrollStudent: data => {
    return api.post('/student', data, {
      headers: {}
    },
    )
  },

  checkClassTests: data => {
    return api.get(`/form?discipline=${data}`, {
      headers: {}
    },
    )
  },

  // envia matricula pra receber codigo por email
  postCadastroId: data => {
    return api.post('/pericia/usuario/cadastro', data, {
      headers: {}
    },
    )
  },

  //confirma o pin recebido por email para validação do usuario
  postConferePIN: data => {
    return api.post('/pericia/usuario/validaPin', data, {
      headers: {}
    },
    )
  },

  //criação do usuário
  createPassword: data => {
    return api.post('/user', data, {
      headers: {}
    },
    )
  },
  // requisição para ter historico de pericias
  getHist: data => {
    return axios.post(`${URL}/pericia/formulario/recebidos`, null, {
      headers: {
        'matricula': data.id,
        'token': data.token,
      }
    },
    )
  },
}

const form = {
  // requisiçao para obter um novo pop atraves de um numero identificador
  getNewForm: number => {
    return axios.get(`${URL}/pericia/formularios/${number}`)
  },
  getAllPops: () => {
    return api.get('/pericia/formularios')
  },
  // requisição para enviar um formulario
  postForm: data => {
    return api.post('/pericia/formulario/envio', data.body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'matricula': data.matricula,
          'referencia': data.ref,
        }
      },
    )
  },
}

export default Api = {
  api,
  user,
  form,
  setToken,
  changeBaseURL,
};
