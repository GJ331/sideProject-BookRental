import { useTranslation } from "react-i18next";
import { IoCloseCircleSharp } from "react-icons/io5";

const BookDetailModal = ({ book, onClose, onCartAdd }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-md">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white modal-text shadow-md dark:bg-[#12141d] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <button
            className="absolute top-3 right-3 p-4 text-primary hover:text-primaryDark"
            onClick={onClose}
          >
            <IoCloseCircleSharp size={40} />
          </button>

          <img
            src={book?.cover}
            alt={book?.title}
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
          />

          <div className="p-5 lg:p-11 flex flex-col h-full">
            <div className="modal-text">
              <h2 className="text-base lg:text-[50px] mb-2 font-bold">
                {book?.title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575a6e] my-3">
                {t(book?.genre)}
              </span>
            </div>

            <div className="flex-grow">
              <p className="text-sm lg:text-base mb-8 lg:mb-16">
                {book?.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mt-auto">
              <a
                onClick={(e) => onCartAdd(e, book)}
                href="#"
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-darkBg font-semibold text-sm"
              >
                <button>
                  <span>
                    ${book?.price} | {t("Add to Cart")}
                  </span>
                </button>
              </a>

              <a
                onClick={onClose}
                href="#"
                className="border border-[#74766f] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-darkBg font-semibold text-sm hover:bg-primary hover:text-white hover:border-none duration-100"
              >
                <button>{t("Cancel")}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
