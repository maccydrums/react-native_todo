import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function AddTodo({submitHandler}) {

  const [todaysDate, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || todaysDate;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [text, setText] = useState('');
  const [calendar, setCalendar] = useState(false);

  const clearText = (text) => {
    console.log('in submit', text);
    console.log('in submit', calendar);
    submitHandler(text, calendar, formattedDate);
    changeHandler('');
  };

  const changeHandler = (val) => {
    setText(val);
  };


  const toggleCalendar = () => {
    Keyboard.dismiss();
    calendar == false ? setCalendar(true) : setCalendar(false);
    showDatepicker();
  };

  const date = todaysDate;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = day + '/' + month;

  return (
      <>
        <View style={styles.wrapper}>
          <View style={styles.checkbox}></View>
          <TextInput
              style={styles.input}
              placeholder="New todo..."
              onChangeText={changeHandler}
              value={text}
              autoCorrect={false}
              onFocus={() => setShow(false) }
          />
        </View>
        <TouchableOpacity style={styles.calendar} onPress={() => toggleCalendar()}><Text
            style={styles.calendarText}>{show == true ? formattedDate : ''} 🗓</Text></TouchableOpacity>
        {calendar ?
            <View style={styles.datepicker}>
              {show && (
                  <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={todaysDate}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                  />
              )}</View>
            :
            <Text></Text>}
        <View style={styles.button}>
          <Button style={styles.button} onPress={() => clearText(text)} title='Add Item' color='white'/>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    marginTop: -35,
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 15,
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#5b8c85',
    borderRadius: 5,
    marginTop: -30,
  },
  checkbox: {
    top: -22,
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5b8c85',
  },
  calendar: {
    alignSelf: 'flex-end',
    top: -48,
    marginRight: 10,
  },
  calendarText: {
    fontSize: 15,
    color: '#6F6F6F',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datepicker: {
    top: -30,
    marginBottom: 0,
  },
});
