import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
import Footer from '../components/footer';
import SpecificTodo from '../screens/specificTodo';
import {ScrollView} from 'react-navigation';


export default function Home({navigation}) {

  const [todos, setTodos] = useState([
    {todo: 'Buy coffee', id: '1', calendar: false},
    {todo: 'Wash the car', id: '2', calendar: false},
    {todo: 'Clean the house', id: '3', calendar: true, date: '2/2'},
    {todo: 'Take the dog for a walk', id: '4', calendar: true, date: '5/2'},
    {todo: 'Homework', id: '5', calendar: false},
    {todo: 'Cut the grass', id: '6', calendar: true, date: '30/1'},
    // {todo: 'Workout', id: '7'},
    // {todo: 'Read the manuscript', id: '8'},
    // {todo: 'Dance lesson', id: '9'},
    // {todo: 'Fix the lamp', id: '10'},
    // {todo: 'Make dinner', id: '11'},
    // {todo: 'Call dad', id: '12'},
    // {todo: 'Relax', id: '13'},
  ]);

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const [deletedTodos, setDeletedTodos] = useState([]);

  const pressHandler = (item) => {
    let itemToDelete = item.id;
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != itemToDelete);
    });
    deletedTodos.push(item);
  };

  const submitHandler = (text, calendar, formattedDate) => {
    console.log(text, calendar);

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {todo: text, id: Math.random().toString(), calendar: calendar, date: formattedDate},

        ];
      });
      navigation.setParams({showTextInput: false});
    } else {
      Alert.alert('Whooops!', 'Your todo is too short! Add a longer sentence!', [
            {text: 'Understood'},
          ],
      );
    }
  };

  // const [toggleInput, setToggleInput] = useState(false);

  const showInput = () => {
    const currentState = navigation.getParam('showTextInput');
    console.log('currentState:', currentState);
    currentState == false ? navigation.setParams({showTextInput: true}) : navigation.setParams({showTextInput: false});
  };


  return (
      <>
        <StatusBar barStyle="light-content"/>
        {navigation.getParam('toggleSwitch') == 0 ?
            <TouchableWithoutFeedback onPress={() => {
              Keyboard.dismiss();
            }}>
              <View style={styles.container}>
                <View style={styles.content}>
                  <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem item={item} pressHandler={pressHandler} navigation={navigation}/>
                        )}
                    />
                  </View>
                  {navigation.getParam('showTextInput') ? <AddTodo submitHandler={submitHandler}/> : <Text></Text>}
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => showInput()}>
                  <View style={styles.innerButtonMark}></View>
                  <View style={styles.innerButtonMarkTwo}></View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
            : <SpecificTodo navigation={navigation} deletedTodos={deletedTodos}/>
        }
        <Footer navigation={navigation} deletedTodos={deletedTodos} deleteAllTodos={deleteAllTodos}/>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    top: -30,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9DB',
  },
  list: {
    marginTop: -30,
    marginBottom: 40,
  },
  test: {
    position: 'absolute',
    right: 15,
    top: 0,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#5b8c85',
    position: 'absolute',
    right: 15,
    bottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButtonMark: {
    backgroundColor: 'white',
    height: 20,
    width: 3,
    top: 1.5,
  },
  innerButtonMarkTwo: {
    backgroundColor: 'white',
    height: 3,
    width: 20,
    bottom: 10,
    // transform:([{ rotateZ: '90deg' }])
  },
});
