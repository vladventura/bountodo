import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { saveData } from "../../store/actions/globalActions";
import {
  changeDescription,
  changeName,
  createTodo,
} from "../../store/actions/todoActions";

const InputBoxes = (props) => {
  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => props.changeName(text)}
        value={props.name}
      />
      <TextInput
        placeholder="Description"
        onChangeText={(text) => props.changeDescription(text)}
        value={props.description}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          props.createTodo();
          props.saveData();
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (text) => dispatch(changeName(text)),
    changeDescription: (text) => dispatch(changeDescription(text)),
    createTodo: () => dispatch(createTodo()),
    saveData: () => dispatch(saveData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputBoxes);
