
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { CartStore } from "./redux/CartStore";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
    <Provider store={CartStore}>
      <App /> 
      <Toaster/>
    </Provider>
  </BrowserRouter>
  
 
);
