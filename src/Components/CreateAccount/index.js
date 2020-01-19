import React, {Component} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {H1, H2} from 'native-base';

class CreateAccount extends Component {
  // state = {  }

  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <View style={Styles.form}>
          <H1 style={{marginBottom: 25}}>Signup Page</H1>
          <Text>#User Name</Text>
          <TextInput style={Styles.inputs} placeholder="User name..." />
          <Text>#Phone Number</Text>
          <TextInput style={Styles.inputs} placeholder="User name..." />
          <Text>#Email</Text>
          <TextInput style={Styles.inputs} placeholder="User name..." />
          {/* <Text>#Password</Text> */}
          <View style={{flexDirection: 'row', ...Styles.passwordWrapper}}>
            <View style={{flex: 1, minHeight: 70}}>
              <Text>#Password</Text>

              <TextInput
                style={{...Styles.inputs, flex: 1, marginRight: 1}}
                secureTextEntry={true}
                placeholder="password..."
              />
            </View>
            <View style={{flex: 1, minHeight: 70}}>
              <Text>#Confirm Password</Text>

              <TextInput
                style={{...Styles.inputs, flex: 1, marginLeft: 1}}
                secureTextEntry={true}
                placeholder="password..."
              />
            </View>
          </View>

          <TouchableOpacity style={Styles.loginButton}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.tools}>
          <View style={Styles.buttons}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{}}>Login instead</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CreateAccount;

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'whitesmoke',
    paddingTop: 30,
    flex: 1,
  },
  header: {
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
  passwordWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tools: {
    // flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    padding: 20,
  },
});
