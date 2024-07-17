import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { BooksContext } from "../../context";
import { MdDeleteOutline } from "react-icons/md";

const Favorites = () => {
  const { t } = useTranslation();

  const { state, dispatch } = useContext(BooksContext);

  function handleBookMarkToggle(event, book) {
    event.stopPropagation();

    dispatch({ type: "TOGGLE_BOOKMARK", payload: book });
  }

  return (
    <div className="shadow-md dark:bg-[#12141d] rounded-2xl overflow-hidden p-5 md:p-9">
      <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
        {t("Favorites Books")}
      </h2>

      <div className="space-y-8 lg:space-y-12 max-h-[450px] mb-10 md:mb-14">
        {state.bookmarkData.length === 0 ? (
          <p className="text-xl overflow-hidden">
            {t("You do not have any books as favorite yet !")}
          </p>
        ) : (
          state.bookmarkData.map((item, index) => (
            <div key={item.id} className="relative">
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <div className="flex items-center gap-4">
                  <img
                    className="rounded overflow-hidden"
                    src={`${item.cover}`}
                    alt={item.title}
                    width={"80px"}
                    height={"80px"}
                  />
                  <div>
                    <h3 className="text-base md:text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">{t(item.genre)}</p>
                    <span className="max-md:text-xs">${item.price}</span>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    onClick={(e) => handleBookMarkToggle(e, item)}
                  >
                    <MdDeleteOutline />
                    <span className="max-md:hidden">{t("Remove")}</span>
                  </button>
                </div>
              </div>
              {index < state.bookmarkData.length - 1 && state.bookmarkData.length > 1 && (
                <hr className="border-t border-slate-500 mt-8" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
