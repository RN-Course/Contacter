import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {H3, H2, Right, Left} from 'native-base';
class Profile extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar backgroundColor="skyblue" />
        <ScrollView>
          <View style={Styles.profileInfoWrapper}>
            <View style={{alignSelf: 'flex-start', paddingLeft: 8}}>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="md-arrow-back"
                color="white"
                size={35}
              />
            </View>
            <View style={{...Styles.profileInfo, ...Styles.profileInfoWrapper}}>
              <View style={Styles.imageWrapper}></View>
              <View style={Styles.infoWrapper}>
                <H2 style={Styles.colorWhite}>User Name</H2>
                <H3 style={Styles.colorWhite}>someone@mail.com</H3>
              </View>
            </View>
          </View>
          <View style={Styles.profileSetting}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileInfoWrapper: {
    backgroundColor: '#454545',
    minHeight: 120,
    padding: 10,
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
  },
  profileSetting: {
    backgroundColor: 'gray',
    padding: 20,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'skyblue',
    margin: 15,
  },
  infoWrapper: {
    flex: 1,
    padding: 10,
  },
  colorWhite: {
    color: 'white',
  },
});
