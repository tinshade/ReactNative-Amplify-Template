import React from 'react';
import {Text} from 'react-native';

const Spacer = ({height}) => {
  return <Text style={{paddingVertical: height}} />;
};

export default Spacer;
