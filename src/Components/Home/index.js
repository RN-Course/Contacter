import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStyles as Styles} from '../../assets/Styles';
import {allContacts} from '../../Strategies';

class Home extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    this._ReadContacts();
  }

  _ReadContacts = async () => {
    let contacts = await allContacts;
    if (contacts) {
      this.setState({contacts});
    }
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <StatusBar backgroundColor="gray" />
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'transparent',
          }}>
          <TextInput
            style={{
              backgroundColor: '#eee',
              padding: 3,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            placeholder="type to search..."
          />
        </View>
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
    tabBarIcon: <Icon name="ios-home" size={25} color="gray" />,
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
