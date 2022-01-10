import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from "./onBoarding";

export function DiffMenu({navigation}){
    return(
        <View style={styles.parent}>
        <Text style={styles.title}>SELECT DIFFICULTY </Text>
             
        <View>
          <TouchableOpacity activeOpacity={0.50} 
            style={styles.button}
            onPress = {() => navigation.navigate('Options')}>
            <Text style ={styles.text}> EASY </Text>
          </TouchableOpacity>
        </View>
  
        <View>
          <TouchableOpacity activeOpacity={0.50}
            style={styles.button}
            onPress={() => navigation.navigate('Test')}>
              <Text style={styles.text}> MEDIUM</Text>
          </TouchableOpacity>
        </View>
  
        <View>
          <TouchableOpacity activeOpacity={0.50}
            style={styles.button}>
              <Text style={styles.text}> HARD</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
}


export function OptionScreen(){
    return (
        <View style={styles.container}>
            <OnBoardingScreen />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function MainMenu(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Menu"  options={{headerShown: false}} />
                <Stack.Screen name="Options" component={OptionScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({
    title:{
      margin: 40,
      fontSize: 30,
      fontWeight: 'bold',
    },
    parent: {
      flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#B0C7D3',
       flexDirection: 'column',
  },
    button: {
      flexDirection: 'row', 
      borderRadius: 20,
      height: 50, 
      width: 350,
      backgroundColor: '#79A6CF',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      margin: 50,
      elevation:3,
  },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });
