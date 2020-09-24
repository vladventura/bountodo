import React from "react";
import { Alert, SafeAreaView, View, StatusBar } from "react-native";

import InputBoxes from "../InputBoxes";
import Todos from "../Todos";
import RarityPicker from "../RarityPicker";
import GoldFameBar from "../GoldFameBar";

import { connect } from "react-redux";
import { loadData } from "../../store/actions/globalActions";
import { dismissErrors } from "../../store/actions/todoActions";

import Constants from "expo-constants";

class MainView extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  _checkForErrors = () => {
    if (this.props.errors) {
      console.log(this.props.errors);
      this._showErrorsAlert();
    }
  };

  _showErrorsAlert = () =>
    Alert.alert(
      "Error(s) validating the ToDo creation",
      this.props.errors,
      [
        {
          text: "OK",
          onPress: () => this.props.dismissErrors(),
          style: "default",
        },
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View
        style={{
          paddingTop: Constants.statusBarHeight,
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <StatusBar hidden />
        <View>
          {this._checkForErrors()}
          <GoldFameBar />
          <InputBoxes />
          <RarityPicker />
          <Todos />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.todo.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
    dismissErrors: () => dispatch(dismissErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
