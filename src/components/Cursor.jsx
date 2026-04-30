import { useEffect, useRef } from "react";
import { cursorTrail } from "../utility/cursor-trail";
export default function CursorTrailCanvas({ color, className, style }) {
  const refCanvas = useRef(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [color]);

  return (
    <canvas
      ref={refCanvas}
      className={className}
      style={style}
    ></canvas>
  );
}