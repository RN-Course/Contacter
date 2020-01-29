import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';
import {DownloadStyles as Styles} from '../../assets/Styles';

class Download extends Component {
  state = {
    contacts: [],
  };

  componentDidMount = () => {
    this._ReadContacts();
  };

  _ReadContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) console.error(err);
      this.setState({contacts});
    });
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '77%'}}>
            <Text>List of contacts</Text>
          </View>
          <CheckBox title="Select All" />
          <Icon style={Styles.icons} name="md-download" size={30} />
        </View>
        <FlatList
          keyExtractor={item => item.recordID}
          data={this.state.contacts}
          renderItem={item => <ListContacts contact={item} />}
        />
        <TouchableOpacity style={Styles.downloadButton}>
          <Icon color="gray" name="md-download" size={35} />
        </TouchableOpacity>
      </View>
    );
  }

  static navigationOptions = () => ({
    tabBarIcon: <Icon name="ios-share" size={25} color="gray" />,
  });
}

function ListContacts(props) {
  if (props) {
    const [number] = props.contact.item.phoneNumbers;
    return (
      <View style={Styles.oneContact}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <View style={Styles.thumbnails}></View>
          <View style={Styles.info}>
            <Text>{props.contact.item.displayName}</Text>
            <Text>{number ? number.number : 'no number found'}</Text>
          </View>
          <View style={Styles.buttons}>
            <CheckBox />
            <Icon style={Styles.icons} name="md-download" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
}

export default Download;
