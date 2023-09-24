"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { emptyCart } from "@/app/store/cartSlice";
import { setTitle } from "@/app/store/titleSlice";
import { setEditing } from "@/app/store/editingSlice";
import { setFontSize } from "@/app/store/fontSizeSlice";
import Image from "next/image";
import TitleInput from "./TitleInput";
import FontSizeSelect from "./FontSizeSelect";
import { BsCart } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import { MdEditAttributes } from "react-icons/md";
import dangoLogo from "@/public/dangoLogo.png";
import { options } from "../../utils/fontSizeOptions";

const Navbar = () => {
  const dispatch = useDispatch();
  const [localTitle, setLocalTitle] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const editing = useSelector((state) => state.editing);
  const fontSize = useSelector((state) => state.fontSize);

  const handleVaciarCarrito = () => {
    dispatch(emptyCart());
  };
  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setLocalTitle(newTitle);

    dispatch(setTitle(newTitle));
  };
  const handleFinishEditing = () => {
    dispatch(setEditing(false));
  };
  const handleFontSizeChange = (event) => {
    const newSize = event.target.value;
    dispatch(setFontSize(newSize));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <div
          className={`flex items-center lg:block ${editing ? "hidden" : ""}`}
        >
          {/* Logo */}
          <Link href={"/"} className="outline-none border-transparent">
            <Image src={dangoLogo} alt="Logo" className="w-full h-auto mr-4" />
          </Link>
        </div>
        {editing && (
          <>
            <TitleInput
              value={localTitle}
              onChange={handleTitleChange}
              placeholder="Change Product Title"
            />

            <FontSizeSelect
              value={fontSize}
              onChange={handleFontSizeChange}
              options={options}
            />
            <MdEditAttributes
              className=" cursor-pointer"
              size={50}
              fill="grey"
              onClick={handleFinishEditing}
            />
          </>
        )}
        {!editing && (
          <div className="relative flex items-center">
            {/* Icono de carrito */}
            <div className="mr-6 relative">
              <BsCart
                className="mr-4 "
                size={26}
                fill={totalItems > 0 ? "" : "grey"}
              />
              <span className="absolute top-[-6px] right-[-1px] bg-white w-4 h-4 flex items-center justify-center rounded-full text-xs font-bold">
                {totalItems}
              </span>
            </div>

            <BsCartX
              className=" hover:text-red cursor-pointer"
              size={26}
              fill={totalItems > 0 ? "red" : "grey"}
              onClick={handleVaciarCarrito}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
