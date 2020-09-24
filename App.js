import React from "react";
import TodoPage from "./components/TodoPage";
import { ShopPage } from "./components/ShopPage";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

import { ROUTES } from "./constants";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const store = createStore(rootReducer, applyMiddleware(thunk));
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={ROUTES.home.name}>
          <Drawer.Screen name={ROUTES.home.name} component={TodoPage} />
          <Drawer.Screen name={ROUTES.shop.name} component={ShopPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
