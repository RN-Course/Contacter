import React, {Component, Fragment} from 'react';
import {HomeStyles as Styles} from '../../assets/Styles';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class ListContacts extends Component {
  state = {
    marked: false,
  };

  selectItem = () => {
    this.setState({marked: true});
    this.props.switchToSelectMode(true);
  };

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
      PreviousRoute: 'Upload',
    };
    this.props.navigation.navigate('ContactProfile', Contact);
  };
  markStatus = () => {
    this.setState({marked: !this.state.marked});
    //     console.log(this.props.contact);
  };
  render() {
    if (this.props.contact) {
      const [number] = this.props.contact.item.phoneNumbers;
      return (
        <Fragment>
          <TouchableOpacity
            style={{
              ...Styles.oneContact,
              backgroundColor: this.state.marked ? 'skyblue' : 'white',
            }}>
            <TouchableOpacity
              onLongPress={this.selectItem}
              onPress={() =>
                this.props.selectMode ? this.markStatus() : this.goToProfile()
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.thumbnails}>
                {this.props.contact.item.hasThumbnail ? (
                  <Image
                    style={Styles.image}
                    source={{
                      uri: this.props.contact.item.thumbnailPath,
                    }}
                  />
                ) : (
                  <Text style={{fontSize: 20}}>
                    {this.props.contact.item.displayName[0]}
                  </Text>
                )}
              </View>
              <View style={Styles.info}>
                <Text>{this.props.contact.item.displayName}</Text>
                <Text>{number ? number.number : 'no number found'}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}
