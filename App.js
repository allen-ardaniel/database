import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // used to navigate between screens
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //imports navigator package
import OnBoardingScreen from './src/screens/onBoarding';
import { Quiz } from './src/screens/TempQuizScreen';
import {QuizScreen} from './src/screens/quizzScreen'
import Swiper from 'react-native-swiper'
import Images from './src/images'
import {HeaderQuiz} from './src/screens/HeaderQuiz'
import {useDeviceOrientation} from '@react-native-community/hooks';


function MainScreen({navigation}){ //navigation is the navigation props to be used in stack container
  const {landscape} = useDeviceOrientation();
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B0C7D3',
      flexDirection: 'column',
      width: "100%",
      height: landscape ? "100%" : "30%",
    }}>
    <Text style={styles.title}>MATHRIX</Text>
    
      <View>
        <TouchableOpacity activeOpacity={0.50} //TouchableOpacity is similar to button's functionality
          style={styles.button} 
          onPress= {() => navigation.navigate('Difficulty')}
          /* 'Difficulty' references the name that is used in the navigation container stack screen below, this structure is the same with most touchable opacity components*/
          > 
          <Text style ={styles.text}> Play </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.50}
          style={styles.button}
          onPress={() => navigation.navigate('QuestionRender')}>
            <Text style={styles.text}> Options</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.50}
          style={styles.button}
          onPress={() => navigation.navigate('Test')}
          >
            <Text style={styles.text}> Exit</Text>
        </TouchableOpacity>
      </View>
    
  </View>
  )
}

export function DiffMenu({navigation}){ //this function is for the Difficulty menu
  const {landscape} = useDeviceOrientation();
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B0C7D3',
      flexDirection: 'column',
      width: "100%",
      height: landscape ? "100%" : "30%",
    }}>
        <Text style={styles.title}>SELECT DIFFICULTY </Text>
             
        <View>
          <TouchableOpacity activeOpacity={0.50} // as of now, only the EASY selection can navigate through screens
            style={styles.button}
            onPress = {() => navigation.navigate('Instruction')}> 
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


function InstructionsScreen({navigation}){ // this is the OnBoarding screen, the images.smartphone,images.mail etc, comes from the index.js under the src/images folder
  const onBoardList = [ // creates a list so that it can iterate through it and display each item
    {id: 1, title: "This is a phone", image: Images.smartphone},
    {id: 2, title: "You have mail", image: Images.mail},
    {id: 3, title: "This is a check", image: Images.check},

];

return (
    <View style={{flex: 1, backgroundColor: "#B0C7D3"}}>
        <Swiper paginationStyle={{
            position: 'absolute',
            bottom: 0,
        }}
            activeDotColor='#67D191'
            activeDotStyle= {{width: 20, height: 8}}
        >
            {onBoardList.map((id, index) =>{ //map function to iterate the onboarding list to view items in this case, id is for the item's number in the array, index is the key value (nagka error ako nung di ko sinama yung index hahahaha)
                return (
                    <View key={index} style={{justifyContent: 'center', alignItems: 'center', height:'100%'}}>
                        <Text /* This renders the title of each ID iteration */ style={styles.textStyle}>{id.title}</Text > 
                        <Image source={id.image} style={styles.imageContainer}/> 
                    </View>
                );
            })}
        </Swiper>
        <View style={{
            position: 'absolute',
            bottom: '5%',
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate('Test')}
            >
                <Text style={styles.textStartedStyle}>Get started</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}

function Testing(){ // this only renders the header from the headerquiz.js file
  return(
    <View style={{
      flex: 1,
      backgroundColor: '#B0C7D3',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <HeaderQuiz />
    </View>
  );
}

function RenderQuestions(){ // this renders the data from the database, as of now, im trying to find a way to render only 5 items rather than all at once
  return(
    <View style={styles.container}>
      <QuizScreen />
    </View>
  )
}


const Stack = createNativeStackNavigator(); // initialize stack variable to use stack package

//Navigation Container renders the navigation screen
//stack navigator initialRouteName is for the app to always start at the value given, in this case, 'Home'
//structure of stack.screen is: stack.screen name = 'any name' component = {function_name} options is not mandatory
//headerShown is the default header of react navigation, pwede mo na lang tanggalin yung headerShown options or set to true na lang para makita mo
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home' > 
          <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}} />
          <Stack.Screen name="Difficulty" component={DiffMenu} options={{headerShown: false}} />
          <Stack.Screen name="Instruction" component={InstructionsScreen} options={{headerShown: false}} />
          <Stack.Screen name="Test" component={Testing} options={{headerShown: false}} />
          <Stack.Screen name="QuestionRender" component={RenderQuestions} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({ // stylesheet to be used for each component
  title:{
    margin: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row', 
    borderRadius: 20,
    height: 50, 
    width: 350,
    backgroundColor: '#67D191',
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
imageContainer:{
  height: '70%',
  width: '90%',
  resizeMode: 'contain',
  marginHorizontal:15,
},
textStyle:{
  fontSize:25,
  fontWeight: 'bold',
  width: '40%',
  textAlign: 'center'
},
buttonStyle:{
  backgroundColor: '#67D191',
  paddingHorizontal: 100,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 20,
  borderRadius: 20,
  marginBottom:20,
},
textStartedStyle:{
  fontWeight: 'bold',
},
});

