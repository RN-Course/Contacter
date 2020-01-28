import React, {Component} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {H1} from 'native-base';
import {Icon} from 'native-base';

class Login extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <View style={Styles.header}>
          <Icon name="ios-contact" style={{fontSize: 80, color: 'white'}} />
        </View>
        <View style={Styles.form}>
          <H1
            style={{
              alignSelf: 'center',
              marginBottom: 25,
              ...Styles.whiteText,
            }}>
            Login Page
          </H1>
          <Text style={{...Styles.whiteText}}>#User Name</Text>
          <TextInput
            style={({...Styles.whiteText}, Styles.inputs)}
            placeholder="User name..."
          />
          <Text style={{...Styles.whiteText}}>#Password</Text>
          <TextInput
            style={({...Styles.whiteText}, Styles.inputs)}
            secureTextEntry={true}
            placeholder="password..."
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={Styles.loginButton}>
            <Text>Login</Text>
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

export const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#555',
    flex: 1,
    // alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  form: {
    padding: 15,
    // backgroundColor: 'green',
    flex: 1,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#9a99a9',
    padding: 10,
    paddingTop: 6,
    paddingBottom: 6,
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tools: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  },
});
