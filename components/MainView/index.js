import React from "react";
import { View } from "react-native";

import InputBoxes from "../InputBoxes";
import Todos from "../Todos";
import RarityPicker from "../RarityPicker";
import GoldFameBar from "../GoldFameBar";

import { connect } from "react-redux";
import { loadData } from "../../store/actions/globalActions";

const MainView = (props) => {
  // comnponentDidMount
  React.useEffect(() => {
    props.loadData();
  }, []);
  return (
    <View>
      <GoldFameBar />
      <InputBoxes />
      <RarityPicker />
      <Todos />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
  };
};

export default connect(null, mapDispatchToProps)(MainView);
