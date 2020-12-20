import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './types';
const initState = {
  open: false,
  content: '',
  type: 'error'
};

const snackbarReducer = (state = initState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      const { content, type } = action.payload;
      return {
        ...state,
        content,
        type,
        open: true
      };
    case CLOSE_SNACKBAR:
      return initState;
    default:
      return state;
  }
};

export default snackbarReducer;
