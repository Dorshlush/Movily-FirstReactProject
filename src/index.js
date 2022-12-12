import React from "react";
import ReactDOM from "react-dom/client";

import Movies from "./component/movies";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
import Movie from "./component/movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

reportWebVitals();
