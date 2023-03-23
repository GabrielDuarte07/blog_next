import Post from "@/containers/Post";
import { getAllPosts } from "@/data/posts/getAllPosts";
import { getCountPosts } from "@/data/posts/getCountPosts";
import { getPost } from "@/data/posts/getPost";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next";

type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await getCountPosts();
  const posts = await getAllPosts(
    `populate=*&pagination[limit]=${numberOfPosts}`
  );
  return {
    fallback: false,
    paths: posts.map((post) => {
      return {
        params: { slug: post.attributes.slug },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params ? (context.params.slug as string) : "";
  const post = await getPost(slug);
  return {
    props: { post },
    revalidate: 1,
  };
};
