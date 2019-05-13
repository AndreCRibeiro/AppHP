export const Types = {
  GET_REQUEST_LOGIN: 'login/GET_REQUEST_LOGIN',
  GET_SUCSSES: 'login/GET_SUCSSES',
  GET_USER_NAME: 'login/GET_USER_NAME',
  GET__USER_ID: 'login/GET_USER_ID',
  GET_TOKEN: 'login/GET_TOKEN',
  GET_EXIT_USER: 'login/GET_EXIT_USER',
  GET_FAILURE: 'login/GET_FAILURE'
};

const InitialState = {
  userName: null,
  userID: null,
  token: null,
  logged: false,
  error: false,
  messageError: '',
  valToken: null,
};


export default function LoginState(state = InitialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST_LOGIN:
      return state;
    case Types.GET_SUCSSES:
      return {
        ...state,
        userName: action.payload.response.nome,
        token: action.payload.response.token,
        userID: action.payload.userID,
        logged: true,
        valtoken: action.payload.response.validade_token,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        logged: false,
        error: true,
        messageError: action.payload.messageError,
      };
    case Types.GET_EXIT_USER:
      return {
        ...state,
        userName: null,
        token: null,
        userID: null,
        logged: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: data => ({
    type: Types.GET_REQUEST_LOGIN,
    payload: { data },
  }),

  getLoginSucsses: (response, userID) => ({
    type: Types.GET_SUCSSES,
    payload: { response, userID },
  }),

  getLoginFailure: messageError => ({
    type: Types.GET_FAILURE,
    payload: { messageError },
  }),

  getExitLogin: () => ({
    type: Types.GET_EXIT_USER
  })

};

export const LoginToken = state => {
  return 'ksjdhfkjsdhf';
}