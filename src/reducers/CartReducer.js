export const initState = {
  cartData: [],
  bookmarkData: [],
};

export const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "TOGGLE_BOOKMARK":
      const bookIndex = state.bookmarkData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (bookIndex === -1) {
        return {
          ...state,
          bookmarkData: [...state.bookmarkData, action.payload],
        };
      } else {
        const updatedBookmark = [...state.bookmarkData];
        updatedBookmark.splice(bookIndex, 1);

        return {
          ...state,
          bookmarkData: updatedBookmark,
        };
      }

    default:
      return state;
  }
};
