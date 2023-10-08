import { Shadow } from ".";
import { shadowComponent } from "./index.css";

type Props = {
  value: keyof typeof Shadow;
};

export default function ShadowComponent({ value }: Props) {
  return (
    <div className={shadowComponent} style={{ boxShadow: Shadow[value] }} />
  );
}
