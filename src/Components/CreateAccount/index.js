import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import {AuthStyles as Styles} from '../../assets/Styles';
import {H2} from 'native-base';
import {Input, Submit} from '../Global/forms';
import {SuccessMessage, ErrorMessage} from '../Global/messages';
import {connect} from 'react-redux';
import {signup} from '../../Redux/Actions/users';

class CreateAccount extends Component {
  state = {
    signedUp: false,
    error: false
  };

  async verifyPassword({Password, ConfirmPassword, Name, Email, Phone}) {
    if (Password === ConfirmPassword) {
      return Object.freeze({
        Name,
        Email,
        Phone,
        Password,
        Status: true,
      });
    } else {
      return null;
    }
  }

  handleSignup = async () => {
    let user = await this.verifyPassword(this.state);
    console.log(user)
    if (user) {
      this.signUser(user);
    } else {
      this.setState({error: true});
    }
  };

  signUser = user => {
    this.props.signup(user);
    this.setState({signedUp: true});
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 4000);
  };
  render() {
    return (
      <ScrollView style={Styles.wrapper}>
        <StatusBar backgroundColor="#0f304d" />
        <View style={{...Styles.header}}>
          <View style={{alignSelf: 'flex-start'}}>
            <H2 style={Styles.whiteText}>Create Your Account</H2>
            <Text style={Styles.whiteText}>
              Now you can create an account for free!
            </Text>
          </View>
        </View>

        <View style={Styles.form}>
          <View style={this.state.signedUp ? {} : {display: 'none'}}>
            <SuccessMessage msg="You have successfully signed up! now you can login using your email and password" />
          </View>
          <View style={this.state.error ? {} : {display: 'none'}}>
            <ErrorMessage msg="There is an error, check your data and try again" />
          </View>
          <Input
            placeholder="John Doe"
            title="User Name"
            getText={e => this.setState({Name: e})}
          />
          <Input
            placeholder="example@domain.com"
            title="Email"
            getText={e => this.setState({Email: e})}
          />
          <Input
            placeholder="09123456789"
            title="Phone"
            getText={e => this.setState({Phone: e})}
          />
          <Input
            placeholder="***"
            title="Password"
            password={true}
            getText={e => this.setState({Password: e})}
          />
          <Input
            placeholder="***"
            title="Confirm Password"
            password={true}
            getText={e => this.setState({ConfirmPassword: e})}
          />
          <Submit title="Create Account" handleOnPress={this.handleSignup} />
        </View>
        <View style={Styles.tools}>
          <View style={Styles.buttons}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{...Styles.whiteText}}>Login Instead!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapActionsToProps = {
  signup,
};

export default connect(mapStateToProps, mapActionsToProps)(CreateAccount);
