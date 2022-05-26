import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPostView from "./AddPostView";

function AddPost(props) {
  const dispatch = useDispatch();
  const { postForm, loadingAddPost } = useSelector((state) => state.home);
  return <AddPostView {...{ props, postForm, dispatch, loadingAddPost }} />;
}

export default AddPost;
