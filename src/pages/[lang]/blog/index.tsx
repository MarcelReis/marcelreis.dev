import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";
import { getLatestPosts, PostType } from "../../../cms/post";

import styles from "pageStyles/blog.module.scss";

import { PostCard } from "components/card";
import Layout from "components/layout";
import { getContent, MetaPage } from "src/cms/cms";

type PropsType = MetaPage & {
  posts: PostType[];
  lang: langEnum;
};
const BlogPage = (props: PropsType) => {
  const img = { src: "https://placekitten.com/200/200", alt: "" };

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <header>
        <h1 className={styles.header}>My awesome future blog</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempore,
          deleniti architecto.
        </p>
      </header>

      <h2 className={styles.subHeader}>Latest Posts</h2>
      <div className={styles.grid}>
        {props.posts &&
          props.posts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              description={post.description}
              tags={post.tags}
              img={img}
              url={`/${props.lang}/blog/${post.url}`}
            />
          ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    ...getContent("/blog", ctx.params.lang),
    posts: getLatestPosts(ctx.params.lang),
    lang: ctx.params.lang,
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
