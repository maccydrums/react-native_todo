import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home.js';
// import SpecificTodo from '../screens/specificTodo.js';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class TestHeader extends React.Component<{ navigation: any }> {
  componentDidMount() {
    this.props.navigation.setParams({showEdit: false});
    this.props.navigation.setParams({toggleSwitch: 0});
    this.props.navigation.setParams({showTextInput: false});
  }

  render() {
    let {navigation} = this.props;

    const pressEdit = () => {
      this.props.navigation.setParams({showEdit: true});
      this.props.navigation.getParam('showEdit') ? this.props.navigation.setParams({showEdit: false}) : this.props.navigation.setParams({showEdit: true});
    };

    return (
        <>
          <View style={styles.wrapper}>
            <Text onPress={() => pressEdit()} style={styles.text}>Edit</Text>
          </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testIcon: {
    fontSize: 32,
    color: 'white',
    top: -3,
    right: 49,
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    right: 40,
    color: 'white'
  },
});


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Todos',
      headerStyle: {
        backgroundColor: '#5b8c85',
      },
      headerTintColor: 'white',
      headerRight: () => <TestHeader navigation={navigation}/>
    }),
  },
  // SpecificTodo: {
  //   screen: SpecificTodo,
  //   navigationOptions: {
  //     title: 'Deleted todos',
  //     headerBackTitle: 'Back',
  //   },
  // },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
