import React from 'react';
import {Text, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomButton = ({styles, title, callback}) => {
  return (
    <Pressable onPress={callback} style={styles?.container}>
      <Text style={styles?.text}>{title}</Text>
    </Pressable>
  );
};

export const SocialButton = ({icon, styles, title, callback, icon_for}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...styles[icon_for],
      }}
      onPress={callback}>
      {icon}
      <Text style={{...styles[icon_for + '_text']}}>{title}</Text>
      <MaterialCommunityIcons name="blank" size={25} />
    </Pressable>
  );
};

export default CustomButton;
