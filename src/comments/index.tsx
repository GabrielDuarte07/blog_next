import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styles";

type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meublognext"
        config={{
          url: `${process.env.SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: "pt_BR",
        }}
      />
    </Container>
  );
};

export default Comments;
