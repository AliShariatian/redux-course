import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// REDUX IMPORT
import { Provider } from "react-redux";
import store from "./Redux/store";

// COMPONENTS IMPORT
import App from "./App";

// CSS IMPORT
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);

