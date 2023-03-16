import Link from "next/link";
import { Container, PostCardCover, PostCardHeading } from "./styles";

type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard = ({
  slug,
  title,
  cover,
}: PostCardProps): React.ReactElement => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
};

export default PostCard;
