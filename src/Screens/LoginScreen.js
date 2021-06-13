import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Image,
} from "react-native";
import { Drawer } from "../Drawer";
import LinearGradient from 'react-native-linear-gradient';
import plant from "./../../assets/plant.png";


const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const LoginScreen = ({ navigation }) => {

    
  const onPressHandler = () => {
    navigation.navigate("Registration");
  };
  const onPressHome = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.bacground}>
       
      <View style={styles.logoContainer}>
        <Image source={plant} style={styles.logo} />
      </View>
        
      <View>
        <TextInput
          styles={styles.input}
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          styles={styles.input}
          placeholder="Password"
          style={styles.input}
          autoCapitalize="none"
        ></TextInput>
        <Button
          style={styles.button}
          //onPress={onPressHome}
          title="LogIn"
          color="#841584"
          accessibilityLabel="Login"
        />

        <Button
          style={styles.button}
          title="Go to Registration"
          color="#841584"
          onPress={onPressHandler}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "green",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: "60%",
  },
  button: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
  },

  bacground: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "green",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  logo: {
    width: 120,
    height: 120,
  },
});
