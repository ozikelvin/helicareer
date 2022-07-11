/* eslint-disable prettier/prettier */


import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';

import {filterData} from '../constants';

import Details from '../components/details';

const Transaction = ({transactionHistory, dataVal}) => {
  // console.log(transactionHistory)

  return (
    <View>
      <Text style={styles.transactionTitle}>
        {' '}
        {dataVal?.date?.toISOString().slice(0, 10)}{' '}
      </Text>
      <View>
        {filterData(transactionHistory, dataVal.date).map((data, index) => {
          return <Details {...data} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.greyText,
  },
  transactionTitle: {
    color: colors.accent,
    fontSize: 25,
    fontWeight: '800',
  },
});

export default Transaction;
