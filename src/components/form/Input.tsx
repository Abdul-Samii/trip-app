import React from 'react';
import { View, Text, TextInput } from 'react-native';
// import { formType } from './formType';

const Input = ({ placeholder, placeholderTextColor, inputMode, value, style, keyboardType, secureTextEntry, onChangeText, ...rest }: formType.inputT) => {
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      inputMode={inputMode}
      value={value}
      style={style}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
    />
  )
}

export default Input;
