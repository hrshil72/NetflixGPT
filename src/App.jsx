import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
