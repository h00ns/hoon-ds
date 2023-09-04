import styled from "@emotion/styled";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { gray, white } from "../../styles/Color";
import Icon from "../Icon";
import useHandleOutsideClick from "./useHandleOutsideClick";

interface Props {
  readonly labels: LabelItem[];
  readonly placeholder?: string;
  readonly name?: string;
  readonly value: string;
  readonly onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type LabelItem = {
  label: string;
  value: string;
};

const Dropdown = (
  { labels, placeholder, name, value, onClick }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useHandleOutsideClick([selectRef], () => {
    setIsOpen(false);
  });

  const selectLabel = labels.find((item) => item.value === value)?.label;
  return (
    <Component>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)} ref={selectRef}>
        {selectLabel || placeholder}
        <Icon name={isOpen ? "chevron-up" : "chevron-down"} />
      </SelectBox>

      {isOpen && (
        <OptionBox>
          {labels.map((item) => (
            <OptionItem
              name={name}
              value={item.value}
              onClick={onClick}
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
  padding: 10px 12px;
  border: 1px solid ${gray.gray3};
  border-radius: 6px;
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
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: "0px 14px 32px 0px rgba(75, 81, 91, 0.12), 0px 10px 14px 0px rgba(75, 81, 91, 0.06), 0px 0px 0px 1px rgba(75, 81, 91, 0.03), 0px 0px 1px 0px rgba(75, 81, 91, 0.20)";
  z-index: 999;

  position: absolute;
  top: 48px;

  display: grid;
  row-gap: 4px;
`;

const OptionItem = styled.button`
  padding: 10px 12px;
  border: none;
  background: ${white};
  border-radius: 6px;
  text-align: left;
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
 *  @props onClick - 클릭 이벤트 { (e: React.MouseEvent<HTMLButtonElement>) => void }
 */
export default forwardRef(Dropdown);
