import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./components/Main";
import { ThemeContext, BooksContext } from "./context";
import { CartReducer, initState } from "./reducers/CartReducer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BooksContext.Provider value={{ state, dispatch }}>
        <Main />
        <ToastContainer />
      </BooksContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
