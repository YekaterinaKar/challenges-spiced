import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
`;
export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </Container>
  );
}
