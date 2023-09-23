import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

function Title({ title }) {
  const fontSize = useSelector((state) => state.fontSize);
  const [font, setFont] = useState('base')

  useEffect(()=>{
    setFont(fontSize)
  },[fontSize])

  return (
    <div className={`text-${font} font-bold font-poppins pb-6 overflow-wrap break-word`}>
      {title}
    </div>
  );
}

export default Title;
