"use client";

import SearchForm from "./SearchForm";
import {
  Heart,
  ShoppingBag,
  TextAlignLeft,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target as Node)) ||
        null
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        {isOpen ? (
          <X
            size={25}
            className="sm:hidden text-gray-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <TextAlignLeft
            size={25}
            className="sm:hidden text-gray-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <SearchForm />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="absolute top-[62px] left-0 bg-color-secondary w-[200px] h-screen shadow-xl rounded-br-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            onClick={handleMenuClick}
          >
            <div className="px-4 mt-4 flex flex-col">
              <Link href="/" className="text-3xl font-bold">
                ALD.<span className="text-color-primary">I</span>
              </Link>
              <div className="w-full h-[1px] bg-gray-200 mb-10 mt-2"></div>

              <Link href="/cart" className="flex gap-2 items-center">
                <ShoppingBag size={20} className="text-gray-500" />
                <p className="text-sm font-semibold text-gray-500">Cart</p>
              </Link>
              <div className="w-full h-[1px] bg-gray-200 my-4"></div>

              <Link href="/favorites" className="flex gap-2 items-center">
                <Heart size={20} className="text-gray-500" />
                <p className="text-sm font-semibold text-gray-500">Favorites</p>
              </Link>
              <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
