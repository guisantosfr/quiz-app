import { Dimensions, StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.75,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: .3,
    shadowRadius: 2,
    marginVertical: 20
  },
  
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '75%',
    padding: 20
  }
})