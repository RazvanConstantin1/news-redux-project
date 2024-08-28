import React from "react";
import AppRouter from "./router/AppRouter.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
