// import { Inter } from "next/font/google";

import { PostData } from "@/domain/posts/post";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    `https://strapi-production-c45a.up.railway.app/api/posts`
  );
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

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

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
        ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};
