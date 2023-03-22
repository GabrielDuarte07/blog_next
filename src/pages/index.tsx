// import { Inter } from "next/font/google";

import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/getAllPosts";
import { PostData } from "@/domain/posts/post";
import { GetStaticProps } from "next";
//import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  //const [posts, setPosts] = useState<PostData[]>([]);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch(`https://strapi-production-c45a.up.railway.app/api/posts`, { signal })
  //     .then((data) => data.json())
  //     .then((response) => {
  //       setPosts(response.data);
  //     });
  //   return () => controller.abort();
  // }, [posts]);
  //console.log(process.env.API_URL);
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllPosts("populate=*&sort=id:DESC");
  return {
    props: { posts },
    revalidate: 1,
  };
};
