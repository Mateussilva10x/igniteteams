import { Container, Icon, Title } from "./GroupCardStyles";

function GroupCard({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}

export default GroupCard;
