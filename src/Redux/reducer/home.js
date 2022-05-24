import { updateObject } from "../../utils/utility";
import { types } from "../actions/types";

const initialState = {
  posts: [],
  loadingPosts: false,
  error: null ,
};

const fetchingPosts = (state, action) => {
  return updateObject(state, { loadingPosts: true });
};
const fetchingPostsSuccess = (state, action) => {
  return updateObject(state, { loadingPosts: false, posts: action.payload });
};

const fetchingPostsFailed = (state, action) => {
  return updateObject(state, { loadingPosts: false, error: action.error });
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_POSTS:
      return fetchingPosts(state, action);
    case types.SUCCESS_FETCHING_POSTS:
      return fetchingPostsSuccess(state, action);
    case types.FAILER_FETCHING_POSTS:
      return fetchingPostsFailed(state, action);

    default:
      return state;
  }
}
