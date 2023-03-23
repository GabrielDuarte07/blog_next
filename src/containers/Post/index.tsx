import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import Heading from "@/components/Heading";
import MainContainer from "@/components/MainContainer";
import PostContainer from "@/components/PostContainer";
import PostCover from "@/components/PostCover";
import PostDetails from "@/components/PostDetails";
import { PostData } from "@/domain/posts/post";

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          alt={post.attributes.title as string}
          src={
            post.attributes.cover?.data.attributes.formats?.large?.url as string
          }
        />
        <PostDetails
          date={post.attributes.createdAt as string}
          category={post.attributes.category?.data.attributes.name as string}
          author={post.attributes.author?.data.attributes.name as string}
        />
        <PostContainer content={post.attributes.content as string} />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Post;
