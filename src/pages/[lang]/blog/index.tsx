import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getPaths, getPosts, langEnum } from "../../../utils/lang";
import { Grid } from "../../../components/base/flex";
import { Card } from "../../../components/base/card";
import { Heading4, Body1 } from "../../../components/base/typography";
import { Chip, ChipContainer } from "../../../components/base/chips";
import { PostBrief } from "../../../components/modules/postBrief";

type PropsType = {
  posts?: any[];
  title: string;
  description: string;
};

const BlogPage = (props: PropsType) => {
  const router = useRouter();
  const { lang } = router.query;

  if (!props.posts) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Blog | Marcelo Reis</title>
      </Head>
      <div>
        {!props.posts && <div>No posts!</div>}
        <Grid>
          {props.posts &&
            props.posts.map((post) => {
              return (
                <Card>
                  <Link
                    href={"/[lang]/blog/[post]/"}
                    as={`/${lang}/blog/${post.slug}/`}
                  >
                    <a>
                      <PostBrief>
                        <Heading4 as="h2">{post.frontmatter.title}</Heading4>
                        <Body1 as="p">{post.frontmatter.description}</Body1>
                        <ChipContainer>
                          {post.frontmatter.tags.map((tag: string) => (
                            <Chip>{tag}</Chip>
                          ))}
                        </ChipContainer>
                      </PostBrief>
                    </a>
                  </Link>
                </Card>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{}, { lang: langEnum }> = async ({
  ...ctx
}) => {
  const { lang } = ctx.params;
  const posts = getPosts(lang);

  const props: PropsType = {
    posts,
    title: "Blog",
    description: "My blog",
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog/"), fallback: false };
};

export default BlogPage;
