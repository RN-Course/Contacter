import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthStyles as Styles} from '../../assets/Styles';

export function Input(props) {
  return (
    <View style={Styles.inputHolder}>
      <Text style={{...Styles.whiteText}}>{props.title}</Text>
      <TextInput
        onChangeText={e => props.getText(e)}
        style={Styles.inputs}
        placeholderTextColor="white"
        placeholder={props.placeholder}
        secureTextEntry={props.password ? true : false}
      />
    </View>
  );
}
export function Submit(props) {
  return (
    <TouchableOpacity
      style={{...Styles.loginButton}}
      onPress={props.handleOnPress}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 17}}>{props.title}</Text>
      </View>
      <View>
        <Icon
          name="md-arrow-down"
          size={20}
          style={{transform: [{rotate: '270deg'}]}}
        />
      </View>
    </TouchableOpacity>
  );
}
