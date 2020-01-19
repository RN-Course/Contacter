import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Download extends Component {
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-home" size={30} />,
  });
  render() {
    return <Text>Download Page</Text>;
  }
}

export default Download;
