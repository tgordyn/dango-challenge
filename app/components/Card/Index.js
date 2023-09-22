"use client";
import React, { useState } from "react";
import Image from "next/image";
import Title from "./Title";
import PriceAndQty from "./PriceAndQty";
import Description from "./Description";
import Button from "./Button";
import LearnMore from "./LearnMore";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import { setEditing } from "@/app/store/editingSlice";

const Card = ({ product }) => {
  const [prodQuantity, setProdQuantity] = useState(1);
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);

  const handleAddToCart = () => {
    const cantidad = prodQuantity;
    dispatch(setEditing(false));
    dispatch(addToCart({ item: product, quantity: cantidad }));
  };

  return (
    <div className="w-full p-4">
      <div className="bg-white overflow-hidden shadow-md border-2 border-black">
        <div className="relative rounded-lg h-30 p-5 pb-6">
          <Image
            src={product.image}
            alt="Producto"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="pl-4 pr-4 pt-0 pb-10 text-center">
          <Title title={title ? title : product.title} />
          <PriceAndQty
            price={product.price}
            quantity={prodQuantity}
            onQuantityChange={(newQuantity) => setProdQuantity(newQuantity)}
          />
          <Description description={product.description} />
          <Button onClick={handleAddToCart} />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default Card;
