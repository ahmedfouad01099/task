import { types } from "./types";

export const onFetchingPosts = () => {
  return { type: types.FETCHING_POSTS };
};

export const onFetchingPostsSuccess = (posts) => {
  return { type: types.SUCCESS_FETCHING_POSTS, payload: posts };
};

export const onFetchingPostsFailed = (error) => {
  return { type: types.FAILER_FETCHING_POSTS, error };
};
