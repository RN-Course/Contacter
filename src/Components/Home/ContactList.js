import React, {Component, Fragment} from 'react';
import {HomeStyles as Styles} from '../../assets/Styles';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
export default class ListContacts extends Component {
  state = {
    marked: false,
  };

  constructor() {
    super();
    this.xAccess = new Animated.Value(0);
    this.onGestureEvent = Animated.event([
      // {nativeEvent: {translationX: this.xAccess}},
    ]);
  }

  goToProfile = () => {
    const Contact = {
      DisplayName: this.props.contact.item.displayName,
      Email: this.props.contact.item.emailAddresses[0]
        ? this.props.contact.item.emailAddresses[0].email
        : null,
      Phone: this.props.contact.item.phoneNumbers[0]
        ? this.props.contact.item.phoneNumbers[0].number
        : null,
      Thumbnail: this.props.contact.item.thumbnailPath,
      PreviousRoute: 'Home',
    };
    this.props.navigation.navigate('ContactProfile', Contact);
  };

  gestureStateChanged = state => {
    console.log(state);
  };

  render() {
    if (this.props.contact) {
      const [number] = this.props.contact.item.phoneNumbers;
      return (
        <Swipeable renderLeftActions={SwipeLeft}>
          <View
            style={[
              {
                ...Styles.oneContact,
                backgroundColor: this.state.marked ? 'skyblue' : 'white',
              },
            ]}>
            <View
              onPress={() => this.goToProfile()}
              style={[{flexDirection: 'row'}]}>
              <View style={Styles.thumbnails}>
                {this.props.contact.item.hasThumbnail ? (
                  <Image
                    style={Styles.image}
                    source={{
                      uri: this.props.contact.item.thumbnailPath,
                    }}
                  />
                ) : (
                  <Text style={{fontSize: 20, color: 'white'}}>
                    {this.props.contact.item.displayName[0]}
                  </Text>
                )}
              </View>
              <View style={Styles.info}>
                <Text>{this.props.contact.item.displayName}</Text>
                <Text>{number ? number.number : 'no number found'}</Text>
              </View>
            </View>
          </View>
        </Swipeable>
      );
    } else {
      return null;
    }
  }
}

function SwipeLeft() {
  return (
    <View>
      <Text>Left</Text>
    </View>
  );
}
