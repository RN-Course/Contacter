import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {ShareStyles as Styles} from '../../assets/Styles';
class Share extends Component {
  state = {
    isModalVisible: false,
    text: '',
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
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
            backdropOpacity={0.6}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}>
            <View style={Styles.closeButtonWrapper}>
              <TouchableOpacity
                onPress={this.toggleModal}
                style={Styles.closeButton}>
                <Icon color="red" name="ios-close" size={30} />
              </TouchableOpacity>
              <View>
                <TextInput
                  style={Styles.shareInput}
                  placeholder="Type your Contact!"
                  onChangeText={text => this.setState({text})}
                  value={this.state.text}
                />
                {/* Here we will map users after we found them in search in flatlist OR scrollview ??? Sorry I don't found a time to complete */}
                <View style={Styles.shareContactsWrapper}>
                  {this.state.text ? (
                    <Icon color="gray" name="md-happy" size={50} />
                  ) : null}
                  <Text style={Styles.shareContacts}>{this.state.text}</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
  static navigationOptions = () => ({
    tabBarIcon: <Icon name="md-share" color="gray" size={25} />,
  });
}

export default Share;
