import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TodoItem({item, pressHandler, navigation}) {
  return (
      <TouchableOpacity style={styles.item} onPress={() => pressHandler(item)}>
        {navigation.getParam('showEdit') ? <View style={styles.deleteItem}>
          <View style={styles.figure}></View>
        </View> : <View></View>}
        {navigation.getParam('toggleSwitch') == 0 ?
            <View style={styles.checkbox}></View>
            :
            <View style={styles.doneTodo}><View style={styles.innerTodo}></View></View>
        }
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{item.todo}</Text>
          {item.calendar == true ?
              <View style={styles.calendar}><Text style={styles.calendarText}>{item.date} 🗓</Text></View>
              :
              <View></View>
          }
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textWrapper: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingBottom: 5,
    fontSize: 15,
  },
  checkbox: {
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5b8c85',
  },
  doneTodo: {
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5b8c85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerTodo: {
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: '#5b8c85',
  },
  deleteItem: {
    width: 20,
    height: 20,
    backgroundColor: '#dc3545',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  figure: {
    width: 14,
    height: 4.5,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  calendar: {
    right: 45,
    top: -6,
  },
  calendarText: {
    fontSize: 15,
    color: '#6F6F6F'
  },
});
