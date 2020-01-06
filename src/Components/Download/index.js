import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  FlatList,
  CheckBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';


class Download extends Component {
  
  state = {
    contacts: [],
  }

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
         <CheckBox title="Select All"/>
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
    tabBarIcon: <Icon name="md-download" size={30} />,
  });
}

function ListContacts(props){
  if(props){
    const [number] = props.contact.item.phoneNumbers;
    return(
      <View style={Styles.oneContact}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <View style={Styles.info}>
            <Text>{props.contact.item.displayName}</Text>
            <Text>{number ? number.number : 'no number found'}</Text>
          </View>
          <CheckBox/>
          <Icon style={Styles.icons} name="md-download" size={30} />
        </TouchableOpacity>
      </View>
    )
  }
  else {
    return null;
  }
  
}

export default Download;

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  oneContact: {
    minHeight: 60,
    marginLeft: 3,
    marginRight: 3,
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  thumbnails: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'gray',
    margin: 4,
    marginRight: 7,
  },
  info: {
    width: '80%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  downloadButton: {
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
  icons:{
    paddingLeft: 10,
  }
})