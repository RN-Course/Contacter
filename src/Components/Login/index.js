import React, {Component} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {AuthStyles as Styles} from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
class Login extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <StatusBar backgroundColor="#0f304d" />
        <View style={{...Styles.header}}>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={{height: 180, width: 180}}
          />
        </View>
        <View style={Styles.form}>
          <View style={Styles.inputHolder}>
            <Text style={{...Styles.whiteText}}>User Name</Text>
            <TextInput
              style={Styles.inputs}
              placeholderTextColor="white"
              placeholder="example@domain.com"
            />
          </View>
          <View style={Styles.inputHolder}>
            <Text style={{...Styles.whiteText}}>Password</Text>
            <TextInput
              style={Styles.inputs}
              secureTextEntry={true}
              placeholder="*********"
              placeholderTextColor="white"
            />
          </View>
          <TouchableOpacity
            style={{...Styles.loginButton}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>Login</Text>
            </View>
            <View>
              <Icon
                name="md-arrow-down"
                size={25}
                style={{transform: [{rotate: '270deg'}]}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.tools}>
          <View style={Styles.buttons}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CreateAccount')}>
              <Text style={{...Styles.whiteText}}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.buttons}>
            <TouchableOpacity>
              <Text style={{...Styles.whiteText}}>Forget Password!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
