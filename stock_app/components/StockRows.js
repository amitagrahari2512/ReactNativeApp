import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import StockRow from './StockRow';

const StockRows = ({stocks}) => {
      return (
        <View>
          {
            Object.keys(stocks).map((stockName, index) => 
            {
            var st = stocks[stockName];
            var stockPrice = st.price;
            var history = st.history;
            var isNew = st.isNew;
            var isGreater = st.isGreater;
            return (
               <StockRow index = {index} 
                        stockName = {stockName} 
                        stockPrice = {stockPrice} 
                        history = {history}
                        isNew = {isNew}
                        isGreater = {isGreater}
                />
              )
            }
          )
          }
        </View>
      )
}

export default StockRows;