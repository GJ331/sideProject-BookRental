import { useState, useContext } from "react";

import { IoBookSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

import { BooksContext, ThemeContext } from "../context";
import CartModal from "./CartModal";

import { Toast } from "../utils/Toast";

const Header = () => {
  const commonClass =
    "bg-primary/20 dark:bg-primary/[7%] rounded-full backdrop-blur-[2px] p-2 inline-block cursor-pointer";

  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
      Toast("Cart is empty", "warning");
    }
  };

  return (
    <header>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/" className="flex items-center gap-2">
          <IoBookSharp className="w-8 h-8" />
          <span className="font-bold uppercase">Book Rental</span>
        </a>

        <ul className="flex items-center space-x-6">
          <li>
            <a
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className={commonClass}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>

          <li>
            <a onClick={handleCartShow} className={commonClass}>
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] right-[-15px] bg-[#12cf6f] text-white text-center p-[2px] w-[28px] h-[28px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
