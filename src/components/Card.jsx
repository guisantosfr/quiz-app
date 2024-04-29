import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import theme from '../theme';

export default function Card({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        { children }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.75,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: theme.colors.darkGray,
    marginVertical: 20
  },
  
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '75%',
    padding: 20
  }
})