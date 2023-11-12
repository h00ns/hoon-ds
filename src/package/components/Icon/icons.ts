import { ReactComponent as Calendar } from "./assets/Calendar.svg";
import { ReactComponent as ChevronUp } from "./assets/ChevronUp.svg";
import { ReactComponent as ChevronDown } from "./assets/ChevronDown.svg";
import { ReactComponent as ChevronLeft } from "./assets/ChevronLeft.svg";
import { ReactComponent as ChevronRight } from "./assets/ChevronRight.svg";
import { ReactComponent as CircleClose } from "./assets/CircleClose.svg";
import { ReactComponent as Close } from "./assets/Close.svg";
import { ReactComponent as Download } from "./assets/Download.svg";
import { ReactComponent as Global } from "./assets/Global.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { ReactComponent as Search } from "./assets/Search.svg";
import { ReactComponent as Trash } from "./assets/Trash.svg";
import { ReactComponent as Upload } from "./assets/Upload.svg";
import { ReactComponent as WarningTriangle } from "./assets/WarningTriangle.svg";
import { ReactComponent as Plus } from "./assets/Plus.svg";
import { ReactComponent as Logout } from "./assets/Logout.svg";
import { ReactComponent as Statistics } from "./assets/Statistics.svg";
import { ReactComponent as ArrowRightBox } from "./assets/ArrowRightBox.svg";
import { ReactComponent as Money } from "./assets/Money.svg";
import { ReactComponent as Bus } from "./assets/Bus.svg";
import { ReactComponent as Card } from "./assets/Card.svg";
import { ReactComponent as Cart } from "./assets/Cart.svg";
import { ReactComponent as Food } from "./assets/Food.svg";
import { ReactComponent as Heart } from "./assets/Heart.svg";
import { ReactComponent as Music } from "./assets/Music.svg";
import { ReactComponent as Plug } from "./assets/Plug.svg";

export const icons = {
  calendar: Calendar,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "circle-close": CircleClose,
  download: Download,
  close: Close,
  global: Global,
  menu: Menu,
  search: Search,
  trash: Trash,
  upload: Upload,
  "warning-triangle": WarningTriangle,
  plus: Plus,
  logout: Logout,
  statistics: Statistics,
  "arrow-right-box": ArrowRightBox,
  money: Money,
  bus: Bus,
  card: Card,
  cart: Cart,
  food: Food,
  heart: Heart,
  music: Music,
  plug: Plug,
};

export type IconName = keyof typeof icons;
