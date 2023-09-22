import React from "react";
import { useSelector } from "react-redux";

function Title({ title }) {
  const fontSize = useSelector((state) => state.fontSize);

  return (
    <div className={`text-${fontSize} font-bold font-poppins pb-6 overflow-wrap break-word`}>
      {title}
    </div>
  );
}

export default Title;
