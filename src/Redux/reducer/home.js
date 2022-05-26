import { checkValidity, updateObject } from "../../utils/utility";
import { types } from "../actions/types";

const initialState = {
  postForm: {
    title: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required",
      touched: false,
    },
    desc: {
      value: "",
      valid: true,
      validation: {
        required: false,
      },
      validationError: null,
      touched: false,
    },
    url: {
      value: "",
      valid: false,
      validation: {
        required: true,
      },
      validationError: "Required must be valid Url",
      touched: false,
    },
  },
  posts: [],
  loadingPosts: false,
  error: null,

  loadingAddPost: false,
};

// ============================================================
const fetchingPosts = (state, action) => {
  return updateObject(state, { loadingPosts: true, error: null });
};
const fetchingPostsSuccess = (state, action) => {
  return updateObject(state, { loadingPosts: false, posts: action.payload });
};

const fetchingPostsFailed = (state, action) => {
  return updateObject(state, { loadingPosts: false, error: action.error });
};
// ============================================================
const changePostInputs = (state, action) => {
  const updatedPostForm = updateObject(state.postForm, {
    [action.inputIdentifier]: updateObject(
      state.postForm[action.inputIdentifier],
      {
        value: action.text,
        valid: checkValidity(
          action.text,
          state.postForm[action.inputIdentifier] &&
            state.postForm[action.inputIdentifier].validation
        ),
        touched: true,
      }
    ),
  });

  return updateObject(state, {
    ...state,
    postForm: updatedPostForm,
  });
};

// ============================================================
const addingPosts = (state, action) => {
  return updateObject(state, {
    loadingAddPost: true,
    postForm: action.postForm,
    props: action.props,
  });
};
const addingPostsSuccess = (state, action) => {
  const posts = [...state.posts];
  posts.push(action.payload);
  return updateObject(state, { loadingAddPost: false, posts });
};

const addingPostsFailed = (state, action) => {
  return updateObject(state, {
    loadingAddPost: false,
  });
};
// ============================================================

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    // ======================================================
    case types.FETCHING_POSTS:
      return fetchingPosts(state, action);
    case types.SUCCESS_FETCHING_POSTS:
      return fetchingPostsSuccess(state, action);
    case types.FAILER_FETCHING_POSTS:
      return fetchingPostsFailed(state, action);
    // ======================================================

    case types.CHANGE_POST_INPUT:
      return changePostInputs(state, action);
    // ======================================================

    case types.ADDING_POST:
      return addingPosts(state, action);
    case types.SUCCESS_ADDING_POST:
      return addingPostsSuccess(state, action);
    case types.FAILER_ADDING_POST:
      return addingPostsFailed(state, action);
    // ======================================================

    default:
      return state;
  }
}
