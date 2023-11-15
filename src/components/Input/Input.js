import { Container } from "./InputStyles";
import { useTheme } from "styled-components/native";

function Input({ ...rest }) {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}

export default Input;
