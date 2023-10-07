import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import { gray, primary } from "../../styles/Color";
import Icon from "../Icon";
import Button from "../Button";
import { ButtonVariant } from "../Button/types";
import useDragAndDrop from "./useDragAndDrop";
import { fileUploader, pointerEventsNone, textDescription } from "./index.css";

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
    <div ref={ref}>
      <div
        className={fileUploader({ isDragging })}
        ref={componentRef}
        onClick={handleFileBoxOpen}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        style={style}
      >
        <div className={pointerEventsNone}>
          <Icon
            size={"48px"}
            name="upload"
            fill={isDragging ? primary.blue : gray.gray3}
            stroke={"transparent"}
          />
        </div>
        <div className={(textDescription({ isDragging }), pointerEventsNone)}>
          {description || "이곳에 파일을 끌어다 놓거나 클릭하세요."}
        </div>

        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          {...InputHTMLAttributes}
        />

        <div className={pointerEventsNone}>
          <Button
            variant={isDragging ? ButtonVariant.PRIMARY : ButtonVariant.OUTLINE}
            text="파일 선택"
          />
        </div>
      </div>
    </div>
  );
};

/**
 *  @Component FileUploader
 *  @props description - placeholder 설명 {string}
 *  @props accept - 파일 확장자 {string}
 *  @props handleFile - 파일 업로드 핸들러 {(file: File) => void}
 */
export default forwardRef(FileUploader);
