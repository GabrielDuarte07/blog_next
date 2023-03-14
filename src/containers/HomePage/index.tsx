import Header from "@/components/Header/Index";
import MainContainer from "@/components/MainContainer";
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
              <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
            ))}
        </Container>
      </MainContainer>
    </>
  );
};

export default HomePage;
