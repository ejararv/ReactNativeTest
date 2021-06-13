
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/Screens/LoginScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AdvertisementsScreen } from './src/Screens/AdvertisementsScreen';
import { MyPlantsScreen } from './src/Screens/MyPlantsScreem';
import { AccountScreen } from './src/Screens/AccountScreen';
import { HomeScreen } from './src/Screens/HomeScreen';






const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()



export default function App() {
  return (


    
    <NavigationContainer>
      
      <Drawer.Navigator
      initialRouteName='Login'
      component={LoginScreen}
      options={{title: 'Login'}}>
        
        <Drawer.Screen
        name='Login'
        component={LoginScreen}
        options={{title: 'Login'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='Registration'
        component={RegistrationScreen}>
          
        </Drawer.Screen>
        <Drawer.Screen
        name='AdvertisementsScreen'
        component={AdvertisementsScreen}
        options={{title: 'AdvertisementsScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='MyPlantsScreen'
        component={MyPlantsScreen}
        options={{title: 'MyPlantsScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{title: 'HomeScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{title: 'AccountScreen'}}>
        </Drawer.Screen>
      </Drawer.Navigator>

    {/* <View style={styles.container}>
       <Navbar title="NAVBAR">
       <AddItem></AddItem>
      <Text  ></Text>
      <StatusBar style="auto" />
      </Navbar>
     <LoginScreen></LoginScreen>
      
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
