import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../utils';

const Title = ({content, custom_styles, type}) => {
  return (
    <View style={{...styles.container, ...custom_styles}.container}>
      <Text style={{...styles.text, ...styles[type], ...custom_styles?.text}}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 10,
  },
  text: {
    color: '#051c60',
    fontFamily: 'Outfit-Regular.ttf',
    fontWeight: 'bold',
  },
  h1: {
    fontSize: normalize(25),
  },
  h2: {
    fontSize: normalize(23),
  },
  h3: {
    fontSize: normalize(21),
  },
  h4: {
    fontSize: normalize(19),
  },
  h5: {
    fontSize: normalize(17),
  },
  h6: {
    fontSize: normalize(15),
  },
});

export default Title;
