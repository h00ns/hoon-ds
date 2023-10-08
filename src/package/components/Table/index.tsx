import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { body, head, headItem, row, rowItem } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly labels: LabelItem[];
  readonly data: any[];
  readonly gridTemplateColumns: string;
}

type LabelItem = {
  label: string;
  value: string;
};

const Table = (
  { labels, data, gridTemplateColumns, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} {...htmlAttributes}>
      <div className={head} style={{ gridTemplateColumns }}>
        {labels.map((label, idx) => (
          <div className={headItem} key={idx}>
            {label.label}
          </div>
        ))}
      </div>

      <div className={body}>
        {data.map((item: any, idx: number) => (
          <div className={row} style={{ gridTemplateColumns }} key={idx}>
            {labels.map((label, idx) => (
              <div className={rowItem} key={idx}>
                {item[label.value]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 *  @Component Table
 *  @props labels - 테이블 header에 표시될 라벨들 { label: string, value: string }[]
 *  @props data - 테이블 row에 표시될 data들 {any}
 *  @props gridTemplateColumns - 테이블의 컬럼 너비 {string}
 */
export default forwardRef(Table);
