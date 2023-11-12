import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { BadgeVariant, BadgeVariantType } from "./types";
import { gray, green, primary, red, white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant: BadgeVariantType;
  readonly text: string;
}

const Badge = (
  { variant, text, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Component style={{ ...styleProps[variant] }} ref={ref} {...htmlAttributes}>
      {text}
    </Component>
  );
};

const Component = styled.div`
  padding: 6px 8px;
  border-radius: ${Radius.MEDIUM};
  box-sizing: border-box;
  font-size: 12px;
  color: ${white};
`;

const styleProps = {
  [BadgeVariant.PRIMARY]: {
    backgroundColor: primary.blue,
  },
  [BadgeVariant.RED]: {
    backgroundColor: red.red3,
  },
  [BadgeVariant.GRAY]: {
    backgroundColor: gray.gray6,
  },
  [BadgeVariant.GREEN]: {
    backgroundColor: green.green3,
  },
};

/**
 *  @Component Badge
 *  @props variant - 뱃지 스타일 {BadgeVariantType}
 *  @props text - 뱃지 텍스트 {string}
 */
export default forwardRef(Badge);
