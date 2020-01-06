import React, {Component} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  componentDidMount = () => {
    console.log('test');
  };
  
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-home" size={35} />
  })
  render() {
    return (
      <View>
        <Text>home page24</Text>
      </View>
    );
  }
}



export default Home;
