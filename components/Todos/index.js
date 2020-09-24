import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";
import { connect } from "react-redux";
import { saveData } from "../../store/actions/globalActions";
import { deleteTodo, finishedTodo } from "../../store/actions/todoActions";

class Todos extends React.Component {
  DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  renderTodo = ({ item }) => {
    return (
      <View style={[styles.item, { backgroundColor: item.rarity.color }]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.description}</Text>
        <Button
          title="Finish Bounty"
          onPress={() => {
            this.props.finishedTodo(item);
            this.props.deleteTodo(item.id);
            this.props.saveData();
          }}
        />
        <Button
          title="Remove"
          onPress={() => {
            this.props.deleteTodo(item.id);
            this.props.saveData();
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          style={{ height: "100%" }}
          data={this.props.todo.todos}
          renderItem={this.renderTodo}
          keyExtractor={(todo) => todo.id.toString()}
          ListEmptyComponent={<Text>Nothing</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    finishedTodo: (todo) => dispatch(finishedTodo(todo)),
    saveData: () => dispatch(saveData()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
