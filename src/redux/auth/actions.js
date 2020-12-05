import createAction from "utils/createActions";

import { SAMPLE } from "./types";

export const sample = {
  loadSample: () => {
    return createAction(SAMPLE.LOAD);
  },
  setSample: () => {
    return createAction(SAMPLE.SUCCESS);
  },
  setError: (error) => {
    return createAction(SAMPLE.ERROR, error);
  }
};