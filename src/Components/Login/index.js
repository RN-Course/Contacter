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
import {readContactPermission, writeContactPermission} from '../../Permissions';
import {login} from '../../Redux/Actions/users';
import {connect} from 'react-redux';
class Login extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  componentDidMount() {
    readContactPermission()
      .catch(err => alert(err))
      .then(() => {
        writeContactPermission().catch(err => alert(err));
      });
  }

  handleLogin = () => {
    const {Email, Password} = this.state;
    if (!Email || !Password) {
      alert('fields are required!!');
    }
    this.props.login(this.state);
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

const mapActionsToProps = {
  login,
};

export default connect(null, mapActionsToProps)(Login);
