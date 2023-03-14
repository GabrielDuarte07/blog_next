import { ReactElement } from "react";
import { Container } from "./styles";
import Link from "next/link";

const Header = (): ReactElement => {
  const teste = process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <Container>
      <Link href="/">{teste}</Link>
    </Container>
  );
};

export default Header;
