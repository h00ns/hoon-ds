import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { tabbar, tabbarItem } from "./index.css";

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
    <div className={tabbar} ref={ref} {...htmlAttributes}>
      {labels.map((item) => (
        <div
          className={tabbarItem({ isSelect: item.label === selectLabel })}
          onClick={() => handleTabClick(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

/**
 *  @Component Tabbar
 *  @props labels - Tabbar에 표시될 라벨들 { label: string, value: string }[]
 *  @props value - 현재 선택된 라벨의 value
 *  @props handleTabClick - 클릭이벤트 { (value:String) => void }
 */
export default forwardRef(Tabbar);
