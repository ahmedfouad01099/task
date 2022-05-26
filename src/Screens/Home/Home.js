import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchingPosts } from "../../Redux/actions/home";
import HomeView from "./HomeView";

function Home(props) {
  const dispatch = useDispatch();
  const { posts, loadingPosts, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(onFetchingPosts());
  }, []);

  return <HomeView {...{ props, posts, loadingPosts, error, dispatch }} />;
}

export default Home;
