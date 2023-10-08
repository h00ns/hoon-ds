import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { circle, toggle } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly checkStatus: boolean;
}

const Toggle = (
  { checkStatus, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={toggle({ checkStatus })} ref={ref} {...htmlAttributes}>
      <div className={circle} />
    </div>
  );
};

/**
 *  @Component Toggle
 *  @props checkStatus - 토글 상태 {boolean}
 */
export default forwardRef(Toggle);
