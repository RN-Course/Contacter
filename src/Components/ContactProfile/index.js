import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {H2, H3, H1} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {ContactProfileStyles as Styles} from '../../assets/Styles';
class ContactProfile extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      DisplayName: this.props.navigation.state.params.DisplayName,
      Thumbnail: this.props.navigation.state.params.Thumbnail,
      Phone: this.props.navigation.state.params.Phone,
      Email: this.props.navigation.state.params.Email,
      FirstChar: this.props.navigation.state.params.DisplayName[0],
      PreviousRoute: this.props.navigation.state.params.PreviousRoute,
    });
  }
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#156485" />
        <ScrollView>
          <View style={Styles.profile}>
            <View style={Styles.profileTools}>
              <Icon
                name="md-arrow-back"
                size={25}
                onPress={() =>
                  this.props.navigation.navigate(this.state.PreviousRoute)
                }
                color="white"
              />
            </View>
            <View style={Styles.profilePicture}>
              {this.state.Thumbnail ? (
                <Image
                  style={{width: 170, height: 170}}
                  source={{uri: this.props.navigation.state.params.Thumbnail}}
                />
              ) : (
                <H1 style={{alignSelf: 'center', color: 'white'}}>
                  {this.state.FirstChar}
                </H1>
              )}
            </View>
            <View style={{alignItems: 'center', padding: 15}}>
              <H3 style={{color: 'white'}}>{this.state.DisplayName}</H3>
            </View>
          </View>
          <View style={Styles.contactDetails}>
            <View style={Styles.listOne}>
              <View>
                <Text style={{fontSize: 16}}>
                  {this.state.Phone
                    ? this.state.Phone
                    : 'Phone is not available'}
                </Text>
                <Text style={{fontSize: 14, color: 'gray'}}>Mobile</Text>
              </View>
              <Icon style={Styles.icon} name="ios-call" size={20} />
            </View>
            <View style={Styles.listOne}>
              <View>
                <Text style={{fontSize: 16}}>
                  {this.state.Email
                    ? this.state.Email
                    : 'No email address found'}
                </Text>
                <Text style={{fontSize: 14, color: 'gray'}}>Email</Text>
              </View>
              <Icon style={Styles.icon} name="ios-mail" size={20} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ContactProfile;
