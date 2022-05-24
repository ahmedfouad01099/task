import { put, takeEvery, call } from "redux-saga/effects";
import { types } from "../actions/types";
import { getAllPosts } from "../services/home";

// GNERATER FUNCTION
function* fetchingPosts() {
  try {
    const response = yield call(getAllPosts);

    if (response instanceof Error) {
      throw new Error(response);
    }
    yield put({ type: types.SUCCESS_FETCHING_POSTS, payload: response });
  } catch (error) {
    console.log("12-", error.toString());
    yield put({ type: types.FAILER_FETCHING_POSTS, error: error.toString() });
  }
}

export default function* postsSaga() {
  yield takeEvery(types.FETCHING_POSTS, fetchingPosts);
}
