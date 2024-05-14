import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import SegmentedControlTab from 'react-native-segmented-control-tab';

import globalStyles from "../utils/globalStyles";

import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from "@react-navigation/native";
import theme from "../theme";

export default function RegisterScreen() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [isTeacher, setIsTeacher] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = index => {
        setSelectedIndex(index);
        index === 0 ? setIsTeacher(true) : setIsTeacher(false);
    }

    function register() {
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastre-se</Text>

            <Input onChangeText={setEmail} placeholder="Email" value={email} />
            <Input onChangeText={setName} placeholder="Nome" value={name} />

            <SegmentedControlTab
                values={['Sou professor', 'Sou aluno']}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
                tabsContainerStyle={styles.tabsContainerStyle}
                tabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
            />

            <Input onChangeText={setPassword} placeholder="Senha" value={password} secureTextEntry/>
            <Input onChangeText={setConfirmPassword} placeholder="Confirmar senha" value={confirmPassword} secureTextEntry/>

            <Button onPress={register} text="Inscrever-se" />

            <Text>Já tem conta? <Link to={{ screen: 'Login'}} style={globalStyles.link}>Login</Link></Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        width: Dimensions.get('window').width * 0.6,
        marginVertical: 20
    },
    tabStyle: {
        paddingVertical: 10
    },
    tabTextStyle: {
        color: theme.colors.lightBlue
    },
    activeTabStyle: {
        backgroundColor: theme.colors.lightBlue
    }
  });