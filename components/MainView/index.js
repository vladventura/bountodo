import React from "react";
import { View } from "react-native";

import InputBoxes from "../InputBoxes";
import Todos from "../Todos";
import RarityPicker from "../RarityPicker";
import GoldFameBar from "../GoldFameBar";

const MainView = () => {
  return (
    <View>
      <GoldFameBar />
      <InputBoxes />
      <RarityPicker />
      <Todos />
    </View>
  );
};

export default MainView;
