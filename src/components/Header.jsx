import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";

import { IoBookSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

import { BooksContext, ThemeContext } from "../context";
import CartModal from "./CartModal";
import { Toast } from "../utils/Toast";

const commonClass =
  "bg-primary/20 dark:bg-primary/[7%] hover:bg-primaryDark backdrop-blur-[2px] inline-block cursor-pointer";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleCartShow = () => {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
      Toast(t("Cart is empty"), "warning");
    }
  };

  return (
    <header>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/" className="flex items-center gap-2">
          <IoBookSharp className="w-8 h-8" />
          <span className="font-bold uppercase">{t("Website")}</span>
        </a>

        <ul className="flex items-center space-x-6">
          <li className="flex items-center">
            <a
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className={`${commonClass} p-3 rounded-full`}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>

          <li className="flex items-center">
            <a
              onClick={handleCartShow}
              className={`${commonClass} p-3 rounded-full`}
            >
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] right-[-15px] bg-[#12cf6f] text-white text-center p-[2px] w-[28px] h-[28px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>

          <li className="flex items-center">
            <button
              onClick={toggleLang}
              className={`${commonClass} py-2 px-4 rounded-md`}
            >
              {i18n.language === "en" ? "English" : "中文"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
