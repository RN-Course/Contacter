import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Sync extends Component {
  state = {};
  render() {
    return <Text>Sync Page</Text>;
  }
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-home" size={30} />,
  });
}

export default Sync;
