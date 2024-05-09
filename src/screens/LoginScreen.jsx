import { SafeAreaView } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import globalStyles from "../utils/globalStyles";

export default function LoginScreen() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function login() {
    
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <Input onChangeText={setEmail} placeholder="Email" value={email} />
            <Input onChangeText={setPassword} placeholder="Senha" value={password} secureTextEntry/>

            <Button onPress={login} text="Login" />
        </SafeAreaView>
    );
}