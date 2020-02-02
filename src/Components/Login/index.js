import React, {Component} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {AuthStyles as Styles} from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {readContactPermission} from '../../Permissions';
import {login as loginUser} from '../../Redux/Actions/users';
import {connect} from 'react-redux';

import {ErrorMessage} from '../Global/messages';
class Login extends Component {
  state = {loginError: false, error: null, loading: true};
  componentDidMount() {
    readContactPermission().catch(err => alert(err));
    useAsyncStorage('token')
      .getItem()
      .then(token => {
        if (token) this.props.navigation.navigate('Home');
      });
  }

  handleLogin = () => {
    const {Email, Password} = this.state;
    console.log(this.state);
    if (!Email || !Password) {
      alert('fields are required!!');
    } else {
      this.props.loginUser(this.state);
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.login.msg) {
      this.setState({loginError: true, error: nextProps.login.msg});
    } else if (nextProps.login.token) {
      this.setState({loginError: false});
      useAsyncStorage('token')
        .setItem(extProps.login.token)
        .catch(() => {
          alert('there is some error, try again');
        })
        .then(() => {
          this.props.navigation.navigate('Home');
        });
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
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
            <View style={{display: this.state.loginError ? 'flex' : 'none'}}>
              <ErrorMessage msg={this.state.error} />
            </View>
            <View style={Styles.inputHolder}>
              <Text style={{...Styles.whiteText}}>User Name</Text>
              <TextInput
                style={Styles.inputs}
                onChangeText={e => this.setState({Email: e})}
                placeholderTextColor="white"
                placeholder="example@domain.com"
              />
            </View>
            <View style={Styles.inputHolder}>
              <Text style={{...Styles.whiteText}}>Password</Text>
              <TextInput
                style={Styles.inputs}
                secureTextEntry={true}
                onChangeText={e => this.setState({Password: e})}
                placeholder="*********"
                placeholderTextColor="white"
              />
            </View>
            <TouchableOpacity
              style={{...Styles.loginButton}}
              onPress={this.handleLogin}>
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
}

const mapStateToProps = state => {
  return {
    login: state.auth.loginData,
  };
};

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
// export default Login;
