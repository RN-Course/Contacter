import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Left, Right, H2, H3} from 'native-base';
import {MaterialTopTabBar} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
class CustomTabBar extends Component {
  state = {};
  switchDrawer = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View style={Styles.wrapper}>
        <View style={Styles.header}>
          <Left style={{flexDirection: 'row'}}>
            <Icon
              onPress={this.switchDrawer}
              name="md-menu"
              size={30}
              style={{marginRight: 15}}
            />
            <H2>Contacter</H2>
          </Left>
          <Right
            style={{
              flexDirection: 'row',
              maxWidth: 70,
            }}>
            <Icon name="md-sync" size={30} style={{marginRight: 25}} />
            <Icon name="ios-search" size={30} />
            {/* <TextInput
              placeholder="Search..."
              style={{flex: 1, width: '100%', bo}}
            /> */}
          </Right>
        </View>
        <MaterialTopTabBar {...this.props} />
      </View>
    );
  }
}

export default CustomTabBar;

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'whitesmoke',
    //     height: 60,
    elevation: 2,
    marginBottom: 8,
  },
  header: {
    //     flex: 1,
    height: 40,
    //     backgroundColor: 'green',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    //     backgroundColor: 'yellow',
    padding: 10,
  },
});
