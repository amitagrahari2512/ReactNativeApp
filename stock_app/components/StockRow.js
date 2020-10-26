import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';


import { TableWrapper,  Cell } from 'react-native-table-component';

const StockRow = ({index, stockName, stockPrice, history, isNew, isGreater}) => {

      const getTimeDiff = (datetime1, datetime2 ) =>
      {

        var datetime = new Date(datetime2).getTime();
        var now = new Date(datetime1).getTime();

        if( isNaN(datetime) )
        {
            return "";
        }
        if (datetime < now) {
            var milisec_diff = now - datetime;
        }else{
            var milisec_diff = datetime - now;
        }

        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

        var date_diff = new Date( milisec_diff );

        return days + " Days "+ date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
    }

      return (
        <TableWrapper key={stockName} style={styles.row}>
          <Cell data={stockName.toUpperCase()} textStyle={styles.text} borderStyle={{borderColor: '#000000'}}/>
          <Cell data={stockPrice.toFixed(2)} textStyle={isNew == false ? styles.new : (isGreater == true ? styles.greater : styles.lower)}/>
          <Cell data = {getTimeDiff(history.slice(-1)[0].time,history.slice(-2)[0].time)} textStyle={styles.text}/>
        </TableWrapper>
      )
}


const styles = StyleSheet.create({
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#ccd9ff' },
  new: {color: '#FFFFFF'},
  greater : {color: '#5cd65c'},
  lower : {color: '#ff0000'}
});
  

export default StockRow;