import React, {Component, PureComponent} from 'react';
import {HomeStyles as Styles} from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, FlatList} from 'react-native';
import {allContacts} from '../../Strategies';

import ContactList from './ContactList';

class Home extends PureComponent {
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
          initialNumToRender={7}
          renderItem={item => (
            <ContactList navigation={this.props.navigation} contact={item} />
          )}
        />
      </View>
    );
  }

  static navigationOptions = () => ({
    tabBarIcon: <Icon name="ios-home" size={25} color="gray" />,
  });
}

export default Home;
