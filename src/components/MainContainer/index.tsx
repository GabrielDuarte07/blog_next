import { ReactElement, ReactNode } from "react";
import * as Styled from "./styles";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps): ReactElement => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default MainContainer;
