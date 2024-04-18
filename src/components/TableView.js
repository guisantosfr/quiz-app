import {  StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableView({ data }){
    const { __v, _id, ...rest} = data[0];
    const tableHeader = Object.keys(rest);
    const arrayOfObjects = data.map(({ _id, __v, ...rest }) => rest);
    const tableBody = arrayOfObjects.map(obj => Object.values(obj));
 
    return (
        <Table borderStyle={styles.border} style={styles.table}>
            <Row data={tableHeader} style={styles.head} textStyle={styles.headText}/>
            <Rows data={tableBody} textStyle={styles.text} />
        </Table>
    )
}

const styles = StyleSheet.create({
    table: { width: '92.5%', marginTop: 20 },
    border: { borderWidth: 2, borderColor: 'teal' },
    head: { height: 40, backgroundColor: '#699CF4' },
    headText: { fontWeight: 'bold', textAlign: 'center', color: '#D8D8D8' },
    text: { margin: 6, color: '#D8D8D8' },
})