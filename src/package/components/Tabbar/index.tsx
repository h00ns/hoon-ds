import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { gray, primary } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly labels: LabelItem[];
  readonly value: string;
  readonly handleTabClick: (value: string) => void;
}

type LabelItem = {
  label: string;
  value: string;
};

const Tabbar = (
  { labels, value, handleTabClick, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const selectLabel = labels.find((item) => item.value === value)?.label;
  return (
    <Component ref={ref} {...htmlAttributes}>
      {labels.map((item) => (
        <TabbarItem
          isSelect={item.label === selectLabel}
          onClick={() => handleTabClick(item.value)}
        >
          {item.label}
        </TabbarItem>
      ))}
    </Component>
  );
};

const Component = styled.div`
  border-bottom: 1px solid ${gray.gray3};

  display: flex;
  justify-content: center;
`;

const TabbarItem = styled.div<{ isSelect: boolean }>`
  padding: 12px 16px;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect &&
    `
    padding: 12px 16px 8px;
    border-bottom: 4px solid ${primary.blue}
  `}
`;

/**
 *  @Component Tabbar
 *  @props labels - Tabbar에 표시될 라벨들 { label: string, value: string }[]
 *  @props value - 현재 선택된 라벨의 value
 *  @props handleTabClick - 클릭이벤트 { (value:String) => void }
 */
export default forwardRef(Tabbar);
