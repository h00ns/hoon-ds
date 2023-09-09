import styled from "@emotion/styled";
import { Radius } from "../Radius";
import { gray } from "../Color";
import { Shadow } from "../Shadow";

type Props = {
  value: keyof typeof Radius;
};

const Component = styled.div`
  width: 320px;
  height: 320px;
  box-shadow: ${Shadow.MEDIUM};
  border: 1px solid ${gray.gray1};
`;

export default function RadiusComponent({ value }: Props) {
  return <Component style={{ borderRadius: Radius[value] }} />;
}
