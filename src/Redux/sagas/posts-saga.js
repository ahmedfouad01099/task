import { put, takeEvery, call } from "redux-saga/effects";
import { types } from "../actions/types";
import { getAllPosts } from "../services/home";

// GNERATER FUNCTION
function* fetchingPosts() {
  try {
    const posts = yield call(getAllPosts);
    console.log("9-", posts);
    yield put({ type: types.SUCCESS_FETCHING_POSTS, payload: posts });
  } catch (error) {
    console.log("12-", error);
    yield put({ type: types.FAILER_FETCHING_POSTS, error: error });
  }
}

export default function* postsSaga() {
  yield takeEvery(types.FETCHING_POSTS, fetchingPosts);
}
