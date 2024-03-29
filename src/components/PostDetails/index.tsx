import Date from "../Date";
import { Container } from "./styles";

type PostDetailsProps = {
  author: string;
  date: string;
  category: string;
};

const PostDetails = ({ author, date, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} em {category}
    </Container>
  );
};

export default PostDetails;
