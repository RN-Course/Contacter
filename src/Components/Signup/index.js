import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {Styles} from '../Login';
import {H1} from 'native-base';
import {Icon} from 'native-base';

class Signup extends Component {
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
          <Text style={{...Styles.whiteText}}>#Email</Text>
          <TextInput
            style={({...Styles.whiteText}, Styles.inputs)}
            placeholder="Email..."
          />
          <Text style={{...Styles.whiteText}}>#Password</Text>
          <TextInput
            style={({...Styles.whiteText}, Styles.inputs)}
            secureTextEntry={true}
            placeholder="password..."
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

export default Signup;
