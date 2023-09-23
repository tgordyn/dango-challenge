import React from "react";
import { useDispatch } from "react-redux";
import { setEditing } from "@/app/store/editingSlice";
import { AiOutlineEdit } from "react-icons/ai";

function PriceAndQty({ price, quantity, onQuantityChange }) {
  const formatPrice = parseFloat(price).toFixed(2);
  const dispatch = useDispatch();
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity >= 0) {
      onQuantityChange(newQuantity);
    }
  };

  const handleEditButtonClick = () => {
    dispatch(setEditing(true));
  };

  return (
    <div className="flex items-center justify-between m-4 mt-0">
  <span className="text-xs sm:text-base font-bold font-poppins text-gray-800">
    ${formatPrice}
  </span>
  <input
    type="number"
    className="w-12 sm:w-16 md:w-10 h-6 sm:h-6 p-1 border border-gray-400 rounded text-xs "
    defaultValue={quantity}
    onChange={handleQuantityChange}
    min="1"
  />
  <AiOutlineEdit
    size={20}
    className="text-lightGrey hover:text-red cursor-pointer text-xs sm:text-base"
    onClick={handleEditButtonClick}
    tabIndex="0"
  />
</div>
  );
}

export default PriceAndQty;
