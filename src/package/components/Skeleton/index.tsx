import { ForwardedRef, forwardRef } from "react";
import { skeleton } from "./index.css";

type Props = {
  readonly width?: string;
  readonly height?: string;
};

const Skeleton = (
  { width = "100%", height = "100%" }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <div className={skeleton} style={{ width, height }} ref={ref} />;
};

/**
 *  @Component Skeleton
 *  @props width - 스켈레톤의 너비 {string}
 *  @props height - 스켈레톤의 높이 {string}
 */
export default forwardRef(Skeleton);
