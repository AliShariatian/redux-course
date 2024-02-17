import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <App />
   </Provider>
);

