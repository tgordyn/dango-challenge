import React from "react";

function Button({onClick}) {
  return (
    <button className="w-28 bg-pink text-black text-l font-regular font-poppins py-2 border border-black mb-4" onClick={onClick}>
      Add to cart
    </button>
  );
}

export default Button;
