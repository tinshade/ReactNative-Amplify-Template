import React from 'react';
import {View, TextInput} from 'react-native';
import {global_styles} from '../../utils/global_styles';
import {Controller} from 'react-hook-form';
import CustomMessage from '../CustomMessage';

const InputField = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              global_styles.inputContainer,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder ? placeholder : 'Enter text..'}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && error?.message !== '' && (
            <CustomMessage color={'red'} content={error?.message} />
          )}
        </>
      )}
    />
  );
};

export default InputField;
