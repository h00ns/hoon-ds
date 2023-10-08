import {
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import Icon from "../Icon";
import useHandleOutsideClick from "./useHandleOutsideClick";
import { dropdown, optionBox, optionItem, selectBox } from "./index.css";

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
  const selectBoxRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useHandleOutsideClick([selectBoxRef], () => {
    setIsOpen(false);
  });

  const selectLabel = labels.find((item) => item.value === value)?.label;
  return (
    <div className={dropdown} ref={ref} {...HTMLAttributes}>
      <div
        className={selectBox}
        ref={selectBoxRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectLabel || placeholder}
        <Icon size="16px" name={isOpen ? "chevron-up" : "chevron-down"} />
      </div>

      {/* Option */}
      {isOpen && (
        <div className={optionBox}>
          {labels.map((item) => (
            <div
              className={optionItem}
              onClick={() => handleLabelClick(item.value, name)}
              key={item.label}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 *  @Component Dropdown
 *  @props labels - 드롭다운에 표시될 라벨들 { label: string, value: string }[]
 *  @props placeholder - placeholder
 *  @props name - name
 *  @props value - value
 *  @props handleLabelClick - 클릭 이벤트 { (value: string, name?: string) => void }
 */
export default forwardRef(Dropdown);
