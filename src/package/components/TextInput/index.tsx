import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const TextInput = ({}: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return <Component />;
};

const Component = styled.div``;

export default forwardRef(TextInput);
