import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {HIGHESTVALUE} from '../../constants';
import {global_styles} from '../../utils/global_styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Controller} from 'react-hook-form';
const IconInputField = ({
  icon,
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <View style={{...global_styles.inputContainer, ...styles.container}}>
      {icon}
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            style={{
              width: '100%',
              fontWeight: 'bold',
              color: '#051c60',
              paddingVertical: 15,
              paddingLeft: 7,
            }}
            maxLength={maxLength ? maxLength : HIGHESTVALUE}
            minLength={minLength ? minLength : 0}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder ? placeholder : 'Enter text..'}
          />
        )}
      />
      <MaterialCommunityIcons name="blank" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    padding: 0,
    borderColor: '#F9FBFC',
    width: '99%',
  },
});

export default IconInputField;
