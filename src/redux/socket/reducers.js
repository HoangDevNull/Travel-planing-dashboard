import { INIT_SOCKET } from './types';
const initState = {
  socketInstance: null,
  isAuthenticate: false,
  error: null
};

const socket = (state = initState, action) => {
  switch (action.type) {
    case INIT_SOCKET.SUCCESS:
      const { socketInstance, isAuthenticate } = action.payload;
      return {
        ...state,
        socketInstance,
        isAuthenticate
      };
    case INIT_SOCKET.ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default socket;
