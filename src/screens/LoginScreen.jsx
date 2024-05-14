import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import globalStyles from "../utils/globalStyles";
import { Link } from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function login() {
        console.log('EMAIL: ', email);
        console.log('PASSWORD: ', password);
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Bem-vindo de volta</Text>

            <Input onChangeText={setEmail} placeholder="Email" value={email} />
            <Input onChangeText={setPassword} placeholder="Senha" value={password} secureTextEntry/>

            <View style={styles.box}>
                <Text style={styles.right}>Esqueceu a senha?</Text>
            </View>


            <Button onPress={login} text="Login" />

            <Text>Não tem conta? <Link to={{ screen: 'Register'}} style={globalStyles.link}>Cadastre-se</Link></Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get('window').width * 0.6
    },

    right:{
        textAlign: 'right'
    }
})