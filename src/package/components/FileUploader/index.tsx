import styled from "@emotion/styled";
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import { Radius } from "../../styles/Radius";
import { blue, gray, primary } from "../../styles/Color";
import Icon from "../Icon";
import Button from "../Button";
import { ButtonVariant } from "../Button/constants";
import useDragAndDrop from "./useDragAndDrop";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  readonly description?: string;
  readonly accept?: string;
  readonly handleFile: (file: File) => void;
}

const FileUploader = (
  { description, accept, handleFile, style, ...InputHTMLAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleFileBoxOpen = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  useDragAndDrop(componentRef, handleFile);
  return (
    <Component
      ref={ref || componentRef}
      onClick={handleFileBoxOpen}
      isDragging={isDragging}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      style={style}
    >
      <IconWrapper>
        <Icon
          size={"48px"}
          name="upload"
          fill={isDragging ? primary.blue : gray.gray3}
          stroke={"transparent"}
        />
      </IconWrapper>
      <Description isDragging={isDragging}>
        {description || "이곳에 파일을 끌어다 놓거나 클릭하세요."}
      </Description>

      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        {...InputHTMLAttributes}
      />

      <ButtonWrapper>
        <Button
          variant={isDragging ? ButtonVariant.PRIMARY : ButtonVariant.OUTLINE}
          text="파일 선택"
        />
      </ButtonWrapper>
    </Component>
  );
};

const Component = styled.div<{ isDragging: boolean }>`
  padding: 24px;
  border-radius: ${Radius.MEDIUM};
  border: 1px dashed ${gray.gray3};
  box-sizing: border-box;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  ${({ isDragging }) =>
    isDragging &&
    `
    background: ${blue.blue1};
    border-color: ${primary.blue};
  `}
`;

const Description = styled.div<{ isDragging: boolean }>`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ isDragging }) => (isDragging ? blue.blue3 : primary.gray)};

  pointer-events: none;
`;

const IconWrapper = styled.div`
  pointer-events: none;
`;

const ButtonWrapper = styled(IconWrapper)``;

/**
 *  @Component FileUploader
 *  @props description - placeholder 설명 {string}
 *  @props accept - 파일 확장자 {string}
 *  @props handleFile - 파일 업로드 핸들러 {(file: File) => void}
 */
export default forwardRef(FileUploader);
