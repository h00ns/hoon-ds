import { primary } from "../../styles/Color";
import { IconName, icons } from "./icons";

type Props = {
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
export default function Icon({
  size = "24px",
  name,
  fill = "transparent",
  stroke = primary.gray,
}: Props) {
  const Component = icons[name] || null;

  const width = size;
  const height = size;

  return <Component style={{ width, height, fill, stroke }} />;
}
