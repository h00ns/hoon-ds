import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";
import { gray, white } from "../../styles/Color";
import Icon from "../Icon";
import { Radius } from "../../styles/Radius";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = (
  { style, onClick, ...inputHtmlAttributes }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Component style={style} onClick={onClick}>
      <Input ref={ref} {...inputHtmlAttributes} />

      <IconWrapper>
        <Icon name="search" size={"16px"} />
      </IconWrapper>
    </Component>
  );
};

const Component = styled.div`
  padding: 11px 12px;
  background: ${white};
  box-sizing: border-box;
  border: 1px solid ${gray.gray3};
  border-radius: ${Radius.MEDIUM};

  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 0;

  border: none;
  &:focus {
    outline: none;
  }
`;

/**
 *  @Component SearchInput
 */
export default forwardRef(SearchInput);
