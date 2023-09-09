import styled from "@emotion/styled";
import {
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import { gray, white } from "../../styles/Color";
import Icon from "../Icon";
import useHandleOutsideClick from "./useHandleOutsideClick";
import { Shadow } from "../../styles/Shadow";
import { Radius } from "../../styles/Radius";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly labels: LabelItem[];
  readonly placeholder?: string;
  readonly name?: string;
  readonly value: string;
  readonly handleLabelClick: (value: string, name?: string) => void;
}

type LabelItem = {
  label: string;
  value: string;
};

const Dropdown = (
  {
    labels,
    placeholder,
    name,
    value,
    handleLabelClick,
    ...HTMLAttributes
  }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useHandleOutsideClick([selectRef], () => {
    setIsOpen(false);
  });

  const selectLabel = labels.find((item) => item.value === value)?.label;
  return (
    <Component {...HTMLAttributes}>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)} ref={selectRef}>
        {selectLabel || placeholder}
        <Icon size="16px" name={isOpen ? "chevron-up" : "chevron-down"} />
      </SelectBox>

      {isOpen && (
        <OptionBox>
          {labels.map((item) => (
            <OptionItem
              onClick={() => handleLabelClick(item.value, name)}
              key={item.label}
            >
              {item.label}
            </OptionItem>
          ))}
        </OptionBox>
      )}
    </Component>
  );
};

const Component = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  padding: 11px 12px;
  border: 1px solid ${gray.gray3};
  border-radius: ${Radius.MEDIUM};
  font-size: 14px;
  cursor: pointer;

  display: flex;
  column-gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

const OptionBox = styled.div`
  width: 100%;
  padding: 8px;
  background: ${white};
  border: 1px solid ${gray.gray3};
  border-radius: ${Radius.MEDIUM};
  box-sizing: border-box;
  box-shadow: ${Shadow.MEDIUM};
  z-index: 999;

  position: absolute;
  top: 48px;

  display: grid;
  row-gap: 4px;
`;

const OptionItem = styled.div`
  padding: 10px 12px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${gray.gray1};
  }
`;

/**
 *  @Component Dropdown
 *  @props labels - 드롭다운에 표시될 라벨들 { label: string, value: string }[]
 *  @props placeholder - placeholder
 *  @props name - name
 *  @props value - value
 *  @props onClick - 클릭 이벤트 { (value: string, name?: string) => void }
 */
export default forwardRef(Dropdown);
