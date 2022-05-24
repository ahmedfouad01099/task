import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchingPosts } from "../../Redux/actions/home";
import HomeView from "./HomeView";

function Home(props) {
  console.log("5- home");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onFetchingPosts());
  }, []);

  const { posts } = useSelector((state) => state.home);
  return <HomeView {...{ props, posts }} />;
}

export default Home;
