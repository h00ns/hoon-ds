import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useGetBadgeProps } from "./hooks";
import { BadgeVariantType } from "./constants";
import { white } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly variant: BadgeVariantType;
  readonly text: string;
}

/**
 *  @Component - Badge
 *  @props variant - 뱃지 스타일 {BadgeVariantType}
 *  @props text - 뱃지 텍스트 {string}
 */
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
  border-radius: 6px;
  font-size: 12px;
  color: ${white};
`;

export default forwardRef(Badge);
