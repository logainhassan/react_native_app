import React, { Component } from 'react';
import { View ,Text, StyleSheet} from 'react-native';

 
class TodoItem extends Component {
  createTasks = (item) => {
    return (
    <View style={styles.container}  key={item.key}>
        <Text style={styles.box}>{item.text}</Text>
    </View>
    );
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <View>
         <Text>{listItems}</Text> 
      </View>
    );
  }
};
 
export default TodoItem;

const styles = StyleSheet.create ({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-end",
        height: 30,
      },
      box: {
        width: 50,
        height: 50, 
        backgroundColor: 'powderblue'
      },
});

