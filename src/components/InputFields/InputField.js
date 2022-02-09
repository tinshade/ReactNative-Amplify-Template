import React from 'react';
import {View, TextInput} from 'react-native';
import {HIGHESTVALUE} from '../../constants';
import {global_styles} from '../../utils/global_styles';
import {Controller} from 'react-hook-form';

const InputField = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  maxLength,
  minLength,
}) => {
  return (
    <View style={global_styles.inputContainer}>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder ? placeholder : 'Enter text..'}
            maxLength={maxLength ? maxLength : HIGHESTVALUE}
            minLength={minLength ? minLength : 0}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
};

export default InputField;
