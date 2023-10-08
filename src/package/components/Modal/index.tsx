import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { background, content, modal } from "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly openModal: boolean;
  readonly width?: string;
  readonly title: string;
  readonly contents: React.ReactNode;
  readonly footer?: React.ReactNode;
}

const Modal = (
  {
    openModal,
    width = "320px",
    title,
    contents,
    footer,
    ...htmlAttributes
  }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={background({ openModal })}>
      <div className={modal} style={{ width }} ref={ref} {...htmlAttributes}>
        <div className={title}>{title}</div>

        <div className={content}>{contents}</div>

        {footer}
      </div>
    </div>
  );
};

/**
 *  @Component Modal
 *  @props openModal - 모달 오픈 여부 {boolean}
 *  @props title - 모달 타이틀 {string}
 *  @props contents - 모달 컨텐츠 {React.ReactNode}
 *  @props footer - 모달 푸터 {React.ReactNode}
 */
export default forwardRef(Modal);
