import { takeLatest, put, call } from "redux-saga/effects";
import { SAMPLE } from "./types";
import { sample } from "./actions";
import { request } from "utils/apiRequest";

function* handleFetchSample(action) {
  try {
    const { payload } = action;
    // fetch sample list from api
    const { data, status } = yield call(request, payload);

    // call fail -> throw new error in catch function
    if (status >= 400) {
      throw new Error(data.errors);
    }

    yield put(sample.setSample(data));
  } catch (err) {
    yield put(sample.setError(err.toString()));
  }
}

export default function* watchSample() {
  yield takeLatest(SAMPLE.LOAD, handleFetchSample);
}
