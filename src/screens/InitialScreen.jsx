import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Link } from '@react-navigation/native'
import Button from '../components/Button';
import globalStyles from "../utils/globalStyles";
import theme from "../theme";

export default function InitialScreen({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text>Bem-vindo</Text>
            <Text>Selecione uma opção</Text>

            <Button text="Avançar" onPress={() => navigation.navigate('Register')}/>

            <Text>Já tem conta? <Link to={{ screen: 'Login'}} style={styles.link}>Login</Link></Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    link: {
        color: theme.colors.lightBlue
    }
})