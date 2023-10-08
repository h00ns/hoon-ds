import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import Icon from "../Icon";
import { iconWrapper, input, searchInput } from "./index.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = (
  { style, onClick, ...inputHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className={searchInput} style={style} onClick={onClick}>
      <input className={input} ref={ref} {...inputHtmlAttributes} />

      <div className={iconWrapper}>
        <Icon name="search" size={"16px"} />
      </div>
    </div>
  );
};

/**
 *  @Component SearchInput
 */
export default forwardRef(SearchInput);
