import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

const GoldFameBar = (props) => {
  return (
    <View>
      <Text>Total Fame: {props.fame}</Text>
      <Text>Total Gold: {props.gold}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    fame: state.player.fame,
    gold: state.player.gold,
  };
};

export default connect(mapStateToProps)(GoldFameBar);
