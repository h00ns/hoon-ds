import { Radius } from "../Radius";
import { radiusComponent } from "./index.css";

type Props = {
  value: keyof typeof Radius;
};

export default function RadiusComponent({ value }: Props) {
  return (
    <div className={radiusComponent} style={{ borderRadius: Radius[value] }} />
  );
}
