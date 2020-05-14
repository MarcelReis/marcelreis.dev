import React from "react";
import Layout from "./src/components/Layout";

import "normalize.css";
import "./src/scss/index.scss";

// eslint-disable-next-line react/prop-types
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
