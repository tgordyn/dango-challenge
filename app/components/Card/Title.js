import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function Title({ title }) {
  const fontSize = useSelector((state) => state.fontSize);

  const fontClass = useMemo(() => {
    const fontSizeOptions = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    };

    if (fontSizeOptions[fontSize]) {
      return fontSizeOptions[fontSize];
    }

    return "text-base";
  }, [fontSize]);

  return (
    <div
      className={`font-bold font-poppins pb-6 overflow-wrap break-word ${fontClass}`}
    >
      {title}
    </div>
  );
}

export default Title;
