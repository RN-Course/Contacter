import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Upload extends Component {
  state = {};
  render() {
    return <Text>Upload Page</Text>;
  }
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-cloud-upload" size={30} />,
  });
}

export default Upload;
