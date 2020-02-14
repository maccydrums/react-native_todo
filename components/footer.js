import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {View, StyleSheet, Text} from 'react-native';


export default function Footer({navigation, deletedTodos, deleteAllTodos}) {

  const [switchState, setSwitch] = useState(0);

  const toggleSwitch = () => {
    switchState == 0 ? setSwitch(1) : setSwitch(0);
    navigation.getParam('toggleSwitch') == 0 ? navigation.setParams({toggleSwitch: 1}) : navigation.setParams({toggleSwitch: 0});
    };

  const test = 3;

  return (
      <View style={styles.wrapper}>
        <View style={styles.footer}>
          <SegmentedControlTab
              values={['To-do', 'All']}
              selectedIndex={switchState}
              onTabPress={toggleSwitch}
              tabStyle={{ left: 4, backgroundColor: 'transparent', color: '#5b8c85', borderColor: '#5b8c85'}}
              activeTabStyle={{
                backgroundColor: '#5b8c85',
              }}
              tabTextStyle={{
                color: "#5b8c85",
              }}
          />
            {/*<Text onPress={deleteAllTodos} style={styles.trashIcon}>🗑</Text>*/}

          <Text style={styles.textNumber}>{deletedTodos.length}</Text>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 67,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  trashIcon: {
      position: 'absolute',
      right: -70,
      fontSize: 19,
  },
  textNumber: {
    color: 'black',
    fontSize: 12,
    right: 12,
    top: -6,
    fontWeight: 'bold',
  },
});
