import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";

import { Toast } from "./Toast";
import Rating from "./Rating";
import { BooksContext } from "../context";
import BookDetailModal from "./BookDetailModal";

const BookCard = ({ book }) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [selectBook, setSelectBook] = useState(null);
  const { state, dispatch } = useContext(BooksContext);

  const handleAddToCart = (event, book) => {
    const found = state.cartData.find((i) => i.id === book.id);
    event.stopPropagation();

    if (!found) {
      dispatch({ type: "ADD_TO_CART", payload: book });
      Toast(`${book?.title} ${t("add to cart")}`, "success");
    } else {
      Toast(`${t(book?.title)} ${t("already in cart")}`, "error");
    }
  };

  const handleBookSelection = (book) => {
    setSelectBook(book);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectBook(null);
    setShowModal(false);
  };

  const handleBookMarkToggle = (event, book) => {
    event.stopPropagation();

    dispatch({ type: "TOGGLE_BOOKMARK", payload: book });
  };

  return (
    <>
      {showModal && (
        <BookDetailModal
          book={selectBook}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#">
          <div className="relative">
            <button
              className={`absolute top-1 right-3 p-1 ${
                state.bookmarkData.some((b) => b.id === book?.id)
                  ? "text-rose-500"
                  : ""
              }`}
              onClick={(e) => handleBookMarkToggle(e, book)}
            >
              <FaHeart />
            </button>
            <img
              src={book?.cover}
              alt={book?.title}
              onClick={() => handleBookSelection(book)}
              className="h-96 object-cover"
            />
          </div>

          <figcaption
            className="pt-4"
            onClick={() => handleBookSelection(book)}
          >
            <h3 className="text-lg font-bold mb-1 h-[3.5rem] overflow-hidden">
              {t(book?.title)}
            </h3>
            <p className="text-[#575a6e] text-sm mb-2">{t(book?.genre)}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={book?.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-darkBg font-semibold text-sm"
              onClick={(e) => handleAddToCart(e, book)}
            >
              <span>${book?.price} | {t("Add to Cart")}</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default BookCard;
