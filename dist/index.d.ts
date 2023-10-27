/// <reference types="react" />
import * as react from 'react';
import { HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 *  @Constants AlertVariant
 *  @value PRIMARY - Blue Info
 *  @value ERROR - Red Error
 */
declare const AlertVariant: {
    readonly PRIMARY: "primary";
    readonly ERROR: "error";
};
type AlertVariantType = (typeof AlertVariant)[keyof typeof AlertVariant];

interface Props$g extends HTMLAttributes<HTMLDivElement> {
    readonly variant?: AlertVariantType;
    readonly children: React.ReactNode;
}
/**
 *  @Component Alert
 *  @props variant - Alert 스타일 {AlertVariantType}
 *  @props children - Alert Component Children {React.ReactNode}
 */
declare const _default$f: react.ForwardRefExoticComponent<Props$g & react.RefAttributes<HTMLDivElement>>;

/**
 *  @Constants BadgeVariant
 *  @value PRIMARY - 파랑
 *  @value RED - 빨강
 *  @value GRAY - 회색
 *  @value GREEN - 초록
 */
declare const BadgeVariant: {
    readonly PRIMARY: "primary";
    readonly RED: "red";
    readonly GRAY: "gray";
    readonly GREEN: "green";
};
type BadgeVariantType = (typeof BadgeVariant)[keyof typeof BadgeVariant];

interface Props$f extends HTMLAttributes<HTMLDivElement> {
    readonly variant: BadgeVariantType;
    readonly text: string;
}
/**
 *  @Component Badge
 *  @props variant - 뱃지 스타일 {BadgeVariantType}
 *  @props text - 뱃지 텍스트 {string}
 */
declare const _default$e: react.ForwardRefExoticComponent<Props$f & react.RefAttributes<HTMLDivElement>>;

/**
 *  @Constants ButtonVariant
 *  @value PRIMARY - 파랑
 *  @value OUTLINE - 외곽선
 *  @value RED - 빨강
 *  @value GRAY - 회색
 *  @value GREEN - 초록
 */
declare const ButtonVariant: {
    readonly PRIMARY: "primary";
    readonly OUTLINE: "outline";
    readonly RED: "red";
    readonly GRAY: "gray";
    readonly GREEN: "green";
};
type ButtonVariantType = (typeof ButtonVariant)[keyof typeof ButtonVariant];

declare const icons: {
    calendar: react.FC<react.SVGProps<SVGSVGElement>>;
    "chevron-up": react.FC<react.SVGProps<SVGSVGElement>>;
    "chevron-down": react.FC<react.SVGProps<SVGSVGElement>>;
    "chevron-left": react.FC<react.SVGProps<SVGSVGElement>>;
    "chevron-right": react.FC<react.SVGProps<SVGSVGElement>>;
    "circle-close": react.FC<react.SVGProps<SVGSVGElement>>;
    download: react.FC<react.SVGProps<SVGSVGElement>>;
    close: react.FC<react.SVGProps<SVGSVGElement>>;
    global: react.FC<react.SVGProps<SVGSVGElement>>;
    menu: react.FC<react.SVGProps<SVGSVGElement>>;
    search: react.FC<react.SVGProps<SVGSVGElement>>;
    trash: react.FC<react.SVGProps<SVGSVGElement>>;
    upload: react.FC<react.SVGProps<SVGSVGElement>>;
    "warning-triangle": react.FC<react.SVGProps<SVGSVGElement>>;
    plus: react.FC<react.SVGProps<SVGSVGElement>>;
    logout: react.FC<react.SVGProps<SVGSVGElement>>;
    statistics: react.FC<react.SVGProps<SVGSVGElement>>;
};
type IconName = keyof typeof icons;

interface Props$e extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly text: string;
    readonly variant?: ButtonVariantType;
    readonly disabled?: boolean;
    readonly iconName?: IconName;
    readonly fullWidth?: boolean;
}
/**
 *  @Component Button
 *  @props text - 버튼 텍스트 {string}
 *  @props variant - 버튼 스타일 {ButtonVariant}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
declare const _default$d: react.ForwardRefExoticComponent<Props$e & react.RefAttributes<HTMLButtonElement>>;

interface Props$d extends HTMLAttributes<HTMLDivElement> {
    readonly children: React.ReactNode;
}
/**
 *  @Component Card
 *  @props children - Card Component Children {React.ReactNode}
 */
declare const _default$c: react.ForwardRefExoticComponent<Props$d & react.RefAttributes<HTMLDivElement>>;

interface Props$c extends HTMLAttributes<HTMLDivElement> {
    readonly labels: LabelItem$2[];
    readonly placeholder?: string;
    readonly name?: string;
    readonly value: string;
    readonly handleLabelClick: (value: string, name?: string) => void;
}
type LabelItem$2 = {
    label: string;
    value: string;
};
/**
 *  @Component Dropdown
 *  @props labels - 드롭다운에 표시될 라벨들 { label: string, value: string }[]
 *  @props placeholder - placeholder
 *  @props name - name
 *  @props value - value
 *  @props handleLabelClick - 클릭 이벤트 { (value: string, name?: string) => void }
 */
declare const _default$b: react.ForwardRefExoticComponent<Props$c & react.RefAttributes<HTMLDivElement>>;

interface Props$b extends InputHTMLAttributes<HTMLDivElement> {
    readonly description?: string;
    readonly accept?: string;
    readonly handleFile: (file: File) => void;
}
/**
 *  @Component FileUploader
 *  @props description - placeholder 설명 {string}
 *  @props accept - 파일 확장자 {string}
 *  @props handleFile - 파일 업로드 핸들러 {(file: File) => void}
 */
declare const _default$a: react.ForwardRefExoticComponent<Props$b & react.RefAttributes<HTMLDivElement>>;

type Props$a = {
    readonly size?: string;
    readonly name: IconName;
    readonly fill?: string;
    readonly stroke?: string;
};
/**
 *  @Component Icon
 *  @props size - 아이콘 크기 {string}
 *  @props name - 아이콘 이름 {IconName}
 *  @props fill - 아이콘 색상(fill) {string}
 *  @props stroke - 아이콘 색상(stroke) {string}
 */
declare function Icon({ size, name, fill, stroke, }: Props$a): react_jsx_runtime.JSX.Element;

/**
 *  @Component Indicator (Loading Indicator)
 */
declare function Indicator(): react_jsx_runtime.JSX.Element;

/**
 *  @Constants InputVariant
 *  @value DEFAULT - 기본
 *  @value ERROR - 에러상황
 *  @value FIXED - 고정상황
 */
declare const InputVariant: {
    readonly DEFAULT: "default";
    readonly ERROR: "error";
    readonly FIXED: "fixed";
};
type InputVariantType = (typeof InputVariant)[keyof typeof InputVariant];

interface Props$9 extends InputHTMLAttributes<HTMLInputElement> {
    readonly variant?: InputVariantType;
}
/**
 *  @Component Input
 *  @props variant - 인풋 스타일 {InputVariantType}
 */
declare const _default$9: react.ForwardRefExoticComponent<Props$9 & react.RefAttributes<HTMLInputElement>>;

interface Props$8 extends HTMLAttributes<HTMLDivElement> {
    readonly openModal: boolean;
    readonly width?: string;
    readonly title: string;
    readonly contents: React.ReactNode;
    readonly footer?: React.ReactNode;
}
/**
 *  @Component Modal
 *  @props openModal - 모달 오픈 여부 {boolean}
 *  @props title - 모달 타이틀 {string}
 *  @props contents - 모달 컨텐츠 {React.ReactNode}
 *  @props footer - 모달 푸터 {React.ReactNode}
 */
declare const _default$8: react.ForwardRefExoticComponent<Props$8 & react.RefAttributes<HTMLDivElement>>;

interface Props$7 extends HTMLAttributes<HTMLDivElement> {
    readonly currentPage: number;
    readonly totalPage: number;
    readonly handlePagination: (page: number) => void;
}
/**
 *  @Component Pagination
 *  @props currentPage - 현재 페이지 {number}
 *  @props totalPage - 전체 페이지 {number}
 *  @props handlePagination - 페이지 변경 핸들러 {(page: number) => void)}
 */
declare const _default$7: react.ForwardRefExoticComponent<Props$7 & react.RefAttributes<HTMLDivElement>>;

interface Props$6 extends InputHTMLAttributes<HTMLInputElement> {
}
/**
 *  @Component SearchInput
 */
declare const _default$6: react.ForwardRefExoticComponent<Props$6 & react.RefAttributes<HTMLInputElement>>;

type Props$5 = {
    readonly width?: string;
    readonly height?: string;
};
/**
 *  @Component Skeleton
 *  @props width - 스켈레톤의 너비 {string}
 *  @props height - 스켈레톤의 높이 {string}
 */
declare const _default$5: react.ForwardRefExoticComponent<Props$5 & react.RefAttributes<HTMLDivElement>>;

interface Props$4 extends HTMLAttributes<HTMLDivElement> {
    readonly labels: LabelItem$1[];
    readonly value: string;
    readonly handleTabClick: (value: string) => void;
}
type LabelItem$1 = {
    label: string;
    value: string;
};
/**
 *  @Component Tabbar
 *  @props labels - Tabbar에 표시될 라벨들 { label: string, value: string }[]
 *  @props value - 현재 선택된 라벨의 value
 *  @props handleTabClick - 클릭이벤트 { (value:String) => void }
 */
declare const _default$4: react.ForwardRefExoticComponent<Props$4 & react.RefAttributes<HTMLDivElement>>;

interface Props$3 extends HTMLAttributes<HTMLDivElement> {
    readonly labels: LabelItem[];
    readonly data: any[];
    readonly gridTemplateColumns: string;
}
type LabelItem = {
    label: string;
    value: string;
};
/**
 *  @Component Table
 *  @props labels - 테이블 header에 표시될 라벨들 { label: string, value: string }[]
 *  @props data - 테이블 row에 표시될 data들 {any}
 *  @props gridTemplateColumns - 테이블의 컬럼 너비 {string}
 */
declare const _default$3: react.ForwardRefExoticComponent<Props$3 & react.RefAttributes<HTMLDivElement>>;

/**
 *  @Constants TextareaVariant
 *  @value DEFAULT - 기본
 *  @value ERROR - 에러상황
 *  @value FIXED - 고정상황
 */
declare const TextareaVariant: {
    readonly DEFAULT: "default";
    readonly ERROR: "error";
    readonly FIXED: "fixed";
};
type TextareaVariantType = (typeof TextareaVariant)[keyof typeof TextareaVariant];

interface Props$2 extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    readonly variant?: TextareaVariantType;
}
/**
 *  @Component Textarea
 *  @props variant - Textarea 스타일 {TextareaVariantType}
 */
declare const _default$2: react.ForwardRefExoticComponent<Props$2 & react.RefAttributes<HTMLTextAreaElement>>;

interface Props$1 extends HTMLAttributes<HTMLDivElement> {
    readonly checkStatus: boolean;
}
/**
 *  @Component Toggle
 *  @props checkStatus - 토글 상태 {boolean}
 */
declare const _default$1: react.ForwardRefExoticComponent<Props$1 & react.RefAttributes<HTMLDivElement>>;

/**
 *  @Constants TypoVariant
 *  @value h - Headings
 *  @value sh - Sub Heading
 *  @value b - Body
 */
declare const TypoVariant: {
    readonly H1: "h1";
    readonly H2: "h2";
    readonly H3: "h3";
    readonly H4: "h4";
    readonly H5: "h5";
    readonly SH1: "sh1";
    readonly SH2: "sh2";
    readonly SH3: "sh3";
    readonly SH4: "sh4";
    readonly SH5: "sh5";
    readonly B1: "b1";
    readonly B2: "b2";
    readonly B3: "b3";
    readonly B4: "b4";
    readonly B5: "b5";
    readonly B6: "b6";
};
type TypoVariantType = (typeof TypoVariant)[keyof typeof TypoVariant];

interface Props extends HTMLAttributes<HTMLDivElement> {
    readonly variant: TypoVariantType;
    readonly color?: string;
    readonly children: React.ReactNode;
}
/**
 *  @Component Typography
 *  @props variant - 텍스트 스타일 {TypoVariant}
 *  @props color - 텍스트 색상 {string}
 *  @props children - 텍스트 {React.ReactNode}
 */
declare const _default: react.ForwardRefExoticComponent<Props & react.RefAttributes<HTMLDivElement>>;

declare const primary: {
    readonly blue: "#1A6DFF";
    readonly gray: "#717680";
};
declare const blue: {
    readonly blue1: "#EDF2FF";
    readonly blue2: "#C1D2FC";
    readonly blue3: "#4980F7";
    readonly blue4: "#0038B2";
    readonly blue5: "#01277A";
};
declare const gray: {
    readonly gray1: "#F6F6F6";
    readonly gray2: "#EEEEEE";
    readonly gray3: "#E2E2E2";
    readonly gray4: "#CBCBCB";
    readonly gray5: "#AFAFAF";
    readonly gray6: "#808080";
    readonly gray7: "#535353";
};
declare const red: {
    readonly red1: "#FFCFCF";
    readonly red2: "#FF9B9B";
    readonly red3: "#FF5C5C";
    readonly red4: "#DF1D1D";
    readonly red5: "#BC0000";
};
declare const green: {
    readonly green1: "#D9F4D2";
    readonly green2: "#A6DA98";
    readonly green3: "#34963C";
    readonly green4: "#236F2A";
    readonly green5: "#113D15";
};
declare const white: "#FFFFFF";
declare const black: "#000000";

/**
 *  Radius를 정의합니다.
 */
declare const Radius: {
    readonly SMALL: "4px";
    readonly MEDIUM: "8px";
    readonly LARGE: "16px";
    readonly XLARGE: "24px";
    readonly MAXIMUM: "999px";
};

/**
 *  Shadow를 정의합니다.
 */
declare const Shadow: {
    readonly SMALL: "0px 0px 20px rgba(0, 0, 0, 0.02), 2px 4px 8px rgba(0, 0, 0, 0.08)";
    readonly MEDIUM: "0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08)";
};

export { _default$f as Alert, AlertVariant, _default$e as Badge, BadgeVariant, _default$d as Button, ButtonVariant, _default$c as Card, _default$b as Dropdown, _default$a as FileUpload, Icon, Indicator, _default$9 as Input, InputVariant, _default$8 as Modal, _default$7 as Pagination, Radius, _default$6 as SearchInput, Shadow, _default$5 as Skeleton, _default$4 as Tabbar, _default$3 as Table, _default$2 as Textarea, TextareaVariant, _default$1 as Toggle, TypoVariant, _default as Typography, black, blue, gray, green, primary, red, white };
