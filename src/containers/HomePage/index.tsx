import { PostData } from "@/domain/posts/post";
import { ReactElement } from "react";
import { Container } from "./styles";

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps): ReactElement => {
  return (
    <Container>
      {posts.length > 0 &&
        posts.map((post) => (
          <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
        ))}
    </Container>
  );
};

export default HomePage;
