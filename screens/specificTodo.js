import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import TodoItem from '../components/todoItem';

export default function SpecificTodo({navigation, deletedTodos}) {

  return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Completed todos:</Text>
          <FlatList
              data={deletedTodos}
              renderItem={({item}) => (
                  <TodoItem item={item} navigation={navigation}/>
              )}
          />
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9DB',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  checkbox: {
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#bbb',
  },

});
