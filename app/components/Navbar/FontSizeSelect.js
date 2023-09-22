import React from "react";

function FontSizeSelect({ value, onChange, options }) {
  return (
    <div className="flex items-center">
      <label htmlFor="fontSize" className="mr-2 text-lightGrey lg:block hidden">
        FontSize:
      </label>
      <select
        id="fontSize"
        name="fontSize"
        value={value}
        onChange={onChange}
        className="border border-lightGrey rounded-md px-2 py-1 shadow-sm focus:outline-none relative"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FontSizeSelect;
