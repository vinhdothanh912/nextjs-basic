import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

interface IPostsProps {
  posts: any[];
}

export default function Posts(props: IPostsProps) {
  return <div>Posts</div>;
}

export const getStaticProps: GetStaticProps<IPostsProps> = async (
  context: GetStaticPropsContext
) => {
  return { props: { posts: [] } };
};
