import React from "react";
import { View } from "react-native";
import InputBoxes from "../InputBoxes";
import Todos from "../Todos";
import RarityPicker from "../RarityPicker";
const MainView = () => {
  return (
    <View>
      <InputBoxes />
      <RarityPicker />
      <Todos />
    </View>
  );
};

export default MainView;
