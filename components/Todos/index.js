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
import { deleteTodo } from "../../store/actions/todoActions";

class Todos extends React.Component {
  renderTodo = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Name: {item.name}</Text>
        <Text style={styles.title}>Description: {item.description}</Text>
        <Button title="Remove" onPress={() => this.props.deleteTodo(item.id)} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.todo.todos.length > 0 && (
          <FlatList
            data={this.props.todo.todos}
            renderItem={this.renderTodo}
            keyExtractor={(todo) => todo.id.toString()}
            ListEmptyComponent={<Text>Nothing</Text>}
          />
        )}
      </SafeAreaView>
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
