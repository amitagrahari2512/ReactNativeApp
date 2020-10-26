import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import StockRows from './StockRows';

const StockTable = (props) => {

  const tableHead = ['Stock', 'Price', 'Last updated'];
  const [stocks, setStocks] = useState({});
  
  const getStock = async (result) => {
    var newStock = stocks;
     result.map((stock) => {
      if(stocks[stock[0]]) {
        var numNew = Number(stock[1]);
        var numOld = newStock[stock[0]].price;
        newStock[stock[0]].price = numNew
        newStock[stock[0]].isNew = false;
        if(numNew > numOld) {
          newStock[stock[0]].isGreater = true;
        }
        else {
          newStock[stock[0]].isGreater = false;
        }
        newStock[stock[0]].history.push({time: Date.now()})
      }
      else {
        newStock[stock[0]] = {price : Number(stock[1]) , isNew : true , isGreater : null, history : [{time: Date.now()}] };
      }
    });
    setStocks(newStock);
  }

   useEffect(() => {
    var url = "ws://stocks.mnet.website/";
    var ws = new WebSocket(url); 

    ws.onopen = (() => {
      console.log("connection opened.");
    });

    ws.onmessage = (async (message) => {
        console.log(message.data);
        await getStock(JSON.parse(message.data));
    });

    ws.onerror = ((error) => {
        console.log(error.message);
    });

    ws.onclose = ((event) => {
        console.log(event.code, event.reason);
    });

  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderColor: '#000000'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        <StockRows stocks = {stocks} />
      </Table>
    </View>
  )

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#9999e6' },
  text: { margin: 6 },
});

export default StockTable;
