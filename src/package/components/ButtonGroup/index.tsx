import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly button1: React.ReactNode;
  readonly button2: React.ReactNode;
}

export default function ButtonGroup({ button1, button2 }: Props) {
  return (
    <Component>
      {button1}
      {button2}
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  column-gap: 12px;
`;
