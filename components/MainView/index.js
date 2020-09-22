import React from "react";
import { View } from "react-native";
import InputBoxes from "../InputBoxes";
import Todos from "../Todos";
const MainView = () => {
  return (
    <View>
      <InputBoxes />
      <Todos />
    </View>
  );
};

export default MainView;
