import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomMessage = ({color, content}) => {
  const styles = StyleSheet.create({
    text: {
      color: color,
      alignSelf: 'stretch',
      fontSize: 13,
      fontWeight: 'bold',
    },
  });
  return <Text style={styles.text}>{content}</Text>;
};

export default CustomMessage;
