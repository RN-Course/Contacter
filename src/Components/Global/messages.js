import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthStyles as Styles} from '../../assets/Styles';
export function SuccessMessage(props) {
  return (
    <Fragment>
      <View style={Styles.successMessage}>
        <Text >
                <Icon name="md-checkmark-circle" size={20} />
        
        {props.msg}</Text>
      </View>
    </Fragment>
  );
}
