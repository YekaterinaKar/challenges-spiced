import styled from "styled-components";
import Button from "../Button";
import useLightsStore from "../../pages/Lightstore";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const turnAllLights = useLightsStore((state) => state.turnAllLights);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          turnAllLights(false);
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          turnAllLights(true);
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
