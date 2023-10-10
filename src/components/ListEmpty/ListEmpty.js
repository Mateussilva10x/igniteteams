import { Container, Message } from "./ListEmptyStyles";

function ListEmpty({ message }) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}

export default ListEmpty;
