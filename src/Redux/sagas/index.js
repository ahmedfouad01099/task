import { spawn } from "@redux-saga/core/effects";

// Sagas
import postsSaga from "./posts-saga";

export default function* rootSaga() {
  yield spawn(postsSaga);
}
