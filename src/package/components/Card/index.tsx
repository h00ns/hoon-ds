import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { card } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
}

const Card = (
  { children, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={card} ref={ref} {...htmlAttributes}>
      {children}
    </div>
  );
};

/**
 *  @Component Card
 *  @props children - Card Component Children {React.ReactNode}
 */
export default forwardRef(Card);
