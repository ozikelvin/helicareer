/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import colors from '../assets/colors';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import {TRANSACTION_HISTORY, getUniqueData, DEVICE_HEIGHT} from '../constants';
import {Button} from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Transaction from '../components/transactions';

const search = <Icon name="search" size={30} color={colors.primary} solid />;

const Home = () => {
  const [val, setVal] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);

  const onSearch = () => {
    if (val.trim() !== '') {
      setTransactionHistory(
        TRANSACTION_HISTORY.filter(
          item => item.status === val || item.type === val || item.name === val ,
        ),
      );
      setVal('');
    }
  };

  const filterValue = (prop, value) => {
    setTransactionHistory(
      TRANSACTION_HISTORY.filter(item => item[prop] === value),
    );
  };

  useEffect(() => { 
    setTransactionHistory(TRANSACTION_HISTORY);
  }, []);

  // console.log(transactionHistory)

  return (
    <View style={[styles.container]}>
      <Header />
      <View>
        <View>
          <TextInput
            icon={search}
            keyboardAppearance="dark"
            returnKeyType="next"
            value={val}
            onChangeText={text => setVal(text)}
            placeholder="search for transaction history etc (deposit , withdrawal)"
            onClick={onSearch}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            variant={'primary'}
            title={' + Withdrawal'}
            onClick={() => {
              filterValue('type', 'withdrawal');
            }}
          />
          <Button
            variant={'primary'}
            title={' - deposit'}
            onClick={() => {
              filterValue('type', 'deposit');
            }}
          />
          <Button
            variant={'success'}
            title={'Approved'}
            onClick={() => {
              filterValue('status', 'approved');
            }}
          />
          <Button
            variant={'danger'}
            title={'Declined'}
            onClick={() => {
              filterValue('status', 'declined');
            }}
          />
        </View>
        <View>
          <View style={{margin: 8}}>
            <Text style={styles.header}>Transactions</Text>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={getUniqueData(transactionHistory)}
              renderItem={({item}) => (
                <Transaction
                  transactionHistory={transactionHistory}
                  dataVal={item}
                />
              )}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={true}
            />
          </View>
        </View>
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
  flatlist: {
    paddingBottom: DEVICE_HEIGHT * 0.28,
    paddingHorizontal: 20,
  },
});

export default Home;
