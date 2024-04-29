import {  StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import theme from '../theme';

export default function TableView({ data }){
    const { __v, _id, ...rest} = data[0];
    const tableHeader = Object.keys(rest);
    const arrayOfObjects = data.map(({ _id, __v, ...rest }) => rest);
    const tableBody = arrayOfObjects.map(obj => Object.values(obj));
 
    return (
        <Table borderStyle={styles.border} style={styles.table}>
            <Row data={tableHeader} style={styles.head} />
            <Rows data={tableBody} textStyle={styles.text} />
        </Table>
    )
}

const styles = StyleSheet.create({
    table: { width: '92.5%', marginTop: 20},
    border: { borderWidth: 1, borderColor: theme.colors.black },
    head: { height: 40, backgroundColor: theme.colors.lightBlue },
    text: { margin: 6, color: theme.colors.black },
})