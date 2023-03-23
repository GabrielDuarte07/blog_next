import { Container } from "./styles";

type PostCoverProps = {
  src: string;
  alt: string;
};

const PostCover = ({ src, alt }: PostCoverProps) => {
  return <Container src={src} alt={alt} />;
};

export default PostCover;
