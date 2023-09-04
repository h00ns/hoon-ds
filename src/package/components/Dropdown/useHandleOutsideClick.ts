import { RefObject, useEffect } from "react";

/**
 *  @hooks
 *  OutsideClick, ESC keydown => execute callback customHooks
 */
export default function useHandleOutsideClick(
  refArray: RefObject<HTMLElement>[],
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick = refArray.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutsideClick) {
        callback();
      }
    };

    //  esc keydown event
    const handleKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [refArray, callback]);
}
