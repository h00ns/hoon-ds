import styled from "@emotion/styled";
import { Radius } from "../Radius";
import { Shadow } from ".";

type Props = {
  value: keyof typeof Shadow;
};

const Component = styled.div`
  width: 320px;
  height: 320px;
  border-radius: ${Radius.MEDIUM};
`;

export default function ShadowComponent({ value }: Props) {
  return <Component style={{ boxShadow: Shadow[value] }} />;
}
