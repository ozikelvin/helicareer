/* eslint-disable prettier/prettier */

import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet, Text , Pressable  } from 'react-native';
import colors from '../assets/colors';



 const TextInput = ({ label, icon, inputStyle, placeholder, onClick = () => {} , ...otherProps }) => {
  return (
    <View style={styles.container} >
    { label && <Text>{label}</Text> }
    <View style={styles.inputWrapper}>
    <Pressable onPress={onClick}>
    <View>{   icon  ?  icon : <Text/>}</View>
    </Pressable>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(64, 82, 75, 0.7)"
          {...otherProps}
        style={styles.inputStyle }
        placeholder={placeholder}
         />
    </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container:{
      paddingVertical:8,
      backgroundColor:colors.gray,
      borderRadius:14,
      margin:10,
  },
  inputStyle:{
  flex:1,
  padding:2,

  },
  inputWrapper:{
     flexDirection:'row-reverse',
      borderRadius:5,
      padding:5,
      alignItems:'center',
      marginTop:5,
  },
  error:{
      color:colors.danger,
      marginTop:4,
  },
});


export default TextInput;
