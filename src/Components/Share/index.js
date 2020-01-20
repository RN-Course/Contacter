import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Share extends Component {
  state = {};
  render() {
    return <Text>Share Page</Text>;
  }
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-share" size={30} />,
  });
}

export default Share;
