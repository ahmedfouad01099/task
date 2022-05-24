import React from "react";
import DetailsView from "./DetailsView";

function Details(props) {
  const route = props.route;
  const { post } = route.params;

  return <DetailsView {...{ props, post }} />;
}

export default Details;
