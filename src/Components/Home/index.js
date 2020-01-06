import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';

class Home extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    this._LoadPermissions();
    this._ReadContacts();
  }

  _ReadContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) console.error(err);
      this.setState({contacts});
    });
  };

  _LoadPermissions() {
    PermissionsAndroid.request('android.permission.READ_CONTACTS')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <FlatList
          keyExtractor={item => item.recordID}
          data={this.state.contacts}
          renderItem={item => <ListContacts contact={item} />}
        />
        <TouchableOpacity style={Styles.syncButton}>
          <Icon color="gray" name="md-sync" size={35} />
        </TouchableOpacity>
      </View>
    );
  }

  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-home" size={30} />,
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
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
}



export default Home;

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  oneContact: {
    // flexDirection: 'row',
    minHeight: 60,
    marginLeft: 3,
    marginRight: 3,
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  thumbnails: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    margin: 4,
    marginRight: 7,
  },
  info: {
    width: '80%',
    justifyContent: 'center',
  },
  syncButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
