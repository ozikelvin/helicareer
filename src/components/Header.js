/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import colors from  '../assets/colors';
import { HEADER_TITLE_SIZE } from  '../constants';




   const Header = ({ title, style, RightIcon }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <View  >

      <Text style={styles.title}> <Text style={styles.logo} >HC</Text> {title}</Text>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgHome,
    marginBottom: 20,
  },
  title: {
    marginTop:10,
    color: colors.white,
    fontSize: HEADER_TITLE_SIZE,
  },
  logo:{
    color: colors.white,
    fontSize: 40,
    fontWeight:'600',
    marginTop:10,
  },
});

export default Header;
