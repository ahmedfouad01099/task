import { put, takeEvery, call } from "redux-saga/effects";
import { types } from "../actions/types";
import { getAllPosts, onAddingPostService } from "../services/home";

// GNERATOR FUNCTION
function* addPost(action) {
  try {
    const response = yield call(onAddingPostService, action.postForm);

    if (response.isSuccess) {
      alert(response.responseData.message);
      action.props.navigation.goBack();
    } else {
      if (Array.isArray(response.responseData)) {
        alert(response.responseData[0].msg);
      } else {
        alert(response.errorMessage);
      }
      throw new Error(response.errorMessage);
    }
    // if (response instanceof Error) {
    //   throw new Error(response);
    // }

    yield put({
      type: types.SUCCESS_ADDING_POST,
      payload: response.responseData.post,
    });
  } catch (error) {
    console.log("15-", error.toString());
    yield put({ type: types.FAILER_ADDING_POST });
  }
}

// =================================================
function* fetchingPosts() {
  try {
    const response = yield call(getAllPosts);

    if (!response.isSuccess) {
      if (Array.isArray(response.responseData)) {
        alert(response.responseData[0].msg);
      } else {
        alert(response.errorMessage);
      }
      throw new Error(response.errorMessage);
    }

    // if (response instanceof Error) {
    //   throw new Error(response);
    // }
    yield put({
      type: types.SUCCESS_FETCHING_POSTS,
      payload: response.responseData.posts,
    });
  } catch (error) {
    yield put({ type: types.FAILER_FETCHING_POSTS, error: error.toString() });
  }
}

export default function* postsSaga() {
  yield takeEvery(types.FETCHING_POSTS, fetchingPosts);
  yield takeEvery(types.ADDING_POST, addPost);
}
