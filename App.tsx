import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { BottomNavigation, Provider as PaperProvider, Title } from 'react-native-paper';
import { HomeScreen } from './screen/HomeScreen';
import {BebasNeue_400Regular} from '@expo-google-fonts/bebas-neue';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlanScreen } from './screen/PlanScreen';
import { WorkoutScreen } from './screen/WorkoutScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
require('typeface-bebas-neue');
const Stack = createStackNavigator();


const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: './assets/slides/1080x1920.png',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: './assets/slides/1080x1920.png',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: './assets/slides/1080x1920.png',
    backgroundColor: '#22bcb5',
  }
];

export default function App() {
  let [showRealApp,setShowRealApp] = useState(false);
  //  let [fontsLoaded] = useFonts({
  //   BebasNeue_400Regular,
  // });

  let _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  }
  let _renderItem = ({ item }) => {
    // console.log(item);
    
    return (
      <View style={{backgroundColor:item.backgroundColor,height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:32,fontFamily:'Bebas Neue'}}>{item.title}</Text>
        <Image source={item.image} style={{height:'auto',width:'100px'}}/>
        <Text >{item.text}</Text>
      </View>
    );
  }
  
  if (showRealApp) {
    return (
      <PaperProvider>
         <NavigationContainer> 
        <StatusBar style="auto" />
        <Stack.Navigator headerMode={'none'}  initialRouteName="Home">
            <Stack.Screen name="Home"  options={{ title: 'Shashi gym' }} component={HomeScreen} />
            <Stack.Screen name="Plan" component={PlanScreen} />
            <Stack.Screen name="Workout" component={WorkoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
   
    );
  } else {
    return <AppIntroSlider renderItem={_renderItem} showNextButton showSkipButton data={slides} onDone={_onDone}/>;
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"100%"
  },
});
