import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation, Provider as PaperProvider, Title } from 'react-native-paper';
import { HomeScreen } from './screen/HomeScreen';
import {BebasNeue_400Regular} from '@expo-google-fonts/bebas-neue';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlanScreen } from './screen/PlanScreen';
const Stack = createStackNavigator();
export default function App() {
   let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

   return (
    <PaperProvider>
       <NavigationContainer> 
      <StatusBar style="auto" />
      <Stack.Navigator headerMode={'none'}  initialRouteName="Home">
          <Stack.Screen name="Home"  options={{ title: 'Shashi gym' }} component={HomeScreen} />
          <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"100%"
  },
});
