/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';

const Details = ({name, status, type}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> {type.toUpperCase()}</Text>
      </View>
      <View>
        <Text>
          {' '}
          Username :{' '}
          <Text style={{fontSize: 18, fontWeight: '700'}}> {name.toUpperCase()} </Text>{' '}
        </Text>
        <Text>
          Status :{' '}
          <Text
            style={[
              styles.status,
              {color: status === 'approved' ? colors.success : colors.danger},
            ]}>
            {status}
          </Text>
        </Text>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: colors.gray,
    backgroundColor: colors.grey,
    marginBottom: 7,
    padding: 5,
    margin: 12,
  },
  title: {
    marginTop: 3,
    color: colors.textStrong,
    fontSize: 24,
  },
  status: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
});

export default Details;
