import React from "react";

function TitleInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="w-1/3 px-2 py-1 border border-lightGrey rounded-md shadow-sm focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default TitleInput;
