import React from "react";
import CustomTheme from "./Config/CustomTheme";
import Routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <CustomTheme>
        <Routes />
      </CustomTheme>
    </Provider>
  );
}

export default App;
