import React, {Component} from 'react';
import {HomeStyles as Styles} from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {allContacts} from '../../Strategies';

import ContactList from './ContactList';

class Upload extends Component {
  state = {
    contacts: [],
    selectMode: false,
  };

  async componentDidMount() {
    let contacts = await allContacts;
    if (contacts) {
      this.setState({contacts});
    }
  }

  switchToSelectMode = () => {
    this.setState({selectMode: true});
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <FlatList
          keyExtractor={item => item.recordID}
          data={this.state.contacts}
          renderItem={item => (
            <ContactList
              switchToSelectMode={this.switchToSelectMode}
              selectMode={this.state.selectMode}
              navigation={this.props.navigation}
              contact={item}
            />
          )}
        />
        <TouchableOpacity style={Styles.syncButton}>
          <Icon color="gray" name="md-cloud" size={35} />
        </TouchableOpacity>
      </View>
    );
  }

  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-cloud" size={25} color="gray" />,
  });
}

export default Upload;
