import { RefObject, useCallback, useEffect } from "react";

/**
 *  @hooks
 *  File Input Drag & Drop customHooks
 */
export default function useDragAndDrop(
  targetRef: RefObject<HTMLDivElement>,
  callback: (file: File) => void
) {
  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      const files = e.dataTransfer.files;

      if (files && files.length > 0) {
        callback(files[0]);
      }
    }
  }, []);

  useEffect(() => {
    targetRef.current?.addEventListener("dragover", handleDragOver);
    targetRef.current?.addEventListener("drop", handleDrop);

    return () => {
      targetRef.current?.removeEventListener("dragover", handleDragOver);
      targetRef.current?.removeEventListener("drop", handleDrop);
    };
  }, []);
}
