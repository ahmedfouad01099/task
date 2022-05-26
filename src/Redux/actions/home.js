import { types } from "./types";

export const onFetchingPosts = () => {
  return { type: types.FETCHING_POSTS };
};
// ===============================================================

export const onChangingPostInput = (text, inputIdentifier) => {
  return { type: types.CHANGE_POST_INPUT, text, inputIdentifier };
};
// ===============================================================

export const onAddingPost = (postForm, props) => {
  return { type: types.ADDING_POST, postForm, props };
};
