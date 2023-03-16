import Header from "@/components/Header/Index";
import MainContainer from "@/components/MainContainer";
import PostCard from "@/components/PostCard";
import { PostData } from "@/domain/posts/post";
import { ReactElement } from "react";
import { Container } from "./styles";

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps): ReactElement => {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.length > 0 &&
            posts.map((post) => (
              <PostCard
                slug={post.attributes.slug || ""}
                key={post.attributes.slug}
                cover={
                  post.attributes.cover?.data.attributes.formats?.thumbnail
                    ?.url || ""
                }
                title={post.attributes.title || ""}
              />
            ))}
        </Container>
      </MainContainer>
    </>
  );
};

export default HomePage;
