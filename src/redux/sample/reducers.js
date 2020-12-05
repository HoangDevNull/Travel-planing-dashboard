import { SAMPLE } from "./types";
const initState = {
  list: [],
  error: null
};

const sampleReducer = (state = initState, action) => {
  switch (action.type) {
    case SAMPLE.LOAD:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default sampleReducer;
