import { THEME } from './types';
const initState = {
  isDark: false,
  error: null
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case THEME.SUCCESS:
      const isDark = action.payload;
      return {
        ...state,
        isDark
      };
    case THEME.ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default themeReducer;
