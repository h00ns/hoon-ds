import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useGetBadgeProps } from "./hooks";
import { BadgeVariantType } from "./constants";
import { white } from "../../styles/Color";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant: BadgeVariantType;
  readonly text: string;
}

const Badge = (
  { variant, text, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [backgroundColor] = useGetBadgeProps(variant);

  return (
    <Component style={{ backgroundColor }} ref={ref} {...htmlAttributes}>
      {text}
    </Component>
  );
};

const Component = styled.div`
  padding: 6px 8px;
  border-radius: ${Radius.MEDIUM};
  font-size: 12px;
  color: ${white};
`;

/**
 *  @Component Badge
 *  @props variant - 뱃지 스타일 {BadgeVariantType}
 *  @props text - 뱃지 텍스트 {string}
 */
export default forwardRef(Badge);
