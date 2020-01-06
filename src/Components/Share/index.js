import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList, StyleSheet
} from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';
class Share extends Component {
  state = {
    isModalVisible: false,
    text: ''
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  render() {
    return (
      <View style={Styles.contanier}>
        <View style={Styles.contanier}>
          <TouchableOpacity
            onPress={this.toggleModal}
            style={Styles.shareButton}>
            <Icon color="gray" name="md-share" size={35} />
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            isVisible={this.state.isModalVisible}
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
          >
            <View style={Styles.closeButtonWrapper}>
              <TouchableOpacity
                onPress={this.toggleModal}
                style={Styles.closeButton}
              >
                <Icon color="red" name="ios-close" size={30} />
              </TouchableOpacity>
              <View>
                <TextInput
                  style={Styles.shareInput}
                  placeholder="Type your Contact!"
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                />
                {/* Here we will map users after we found them in search in flatlist OR scrollview ??? Sorry I don't found a time to complete */}
                <View style={Styles.shareContactsWrapper}>
                  {this.state.text ? <Icon color="gray" name="md-happy" size={50} /> : null}
                  <Text style={Styles.shareContacts}>
                    {this.state.text}
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View >
    );
  }
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-share" size={30} />,
  });
}

export default Share;

const Styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  shareButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButtonWrapper: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  closeButton: {
    width: 30,
    right: 0,
    alignItems: 'center',
    position: 'absolute'
  },
  shareInput: {
    padding: 8,
    height: 40,
    backgroundColor: '#f0efef',
    marginTop: 5,
    borderRadius: 100,
    elevation: 1
  },
  shareContactsWrapper: {
    flexDirection: 'row',
    marginTop: 8
  },
  shareContacts: {
    padding: 5,
    color: 'gray',
    alignSelf: 'center'
  }
});
