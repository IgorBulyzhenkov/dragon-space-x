import React from "react";
import ReactDOM from "react-dom/client";
// import dataPersist from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./component/App";
import  store  from "./redux/store";

// const { store, persistor } = dataPersist;
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<p>...Loading</p>} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
