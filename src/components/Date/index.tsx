import { formatDate } from "@/utils/formatDate";
import { Container } from "./styles";

type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};

export default Date;
