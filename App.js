import React from "react";
import MainView from "./components/MainView";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

import { NativeRouter, Route } from "react-router-native";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={MainView} />
      </NativeRouter>
    </Provider>
  );
}
