import React from "react";

import { getPaths } from "../../../utils/lang";

const AboutPage = () => {
  return <div></div>;
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/about/"), fallback: false };
};

export default AboutPage;
