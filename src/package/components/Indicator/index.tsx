import { indicator } from "./index.css";

type Props = {
  readonly size?: string;
};

/**
 *  @Component Indicator (Loading Indicator)
 */
export default function Indicator({ size = "16px" }: Props) {
  const width = size;
  const height = size;

  return <div className={indicator} style={{ width, height }}></div>;
}
