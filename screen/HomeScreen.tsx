import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BottomNavigation, Title } from 'react-native-paper';
import { WorkoutCard } from '../components/WorkoutCard';
export function WorkoutsTab() {
    const plans:Array<{title: string}> = [
        {
            title: 'Monday workout plan'
        },
        {
            title: 'Tuesday workout plan'
        },
        {
            title: 'Wednesday workout plan'
        },
        {
            title: 'Thursday workout plan'
        },
        {
            title: 'Friday workout plan'
        },
        {
            title: 'Saturday workout plan'
        },
        {
            title: 'Sunday workout plan'
        },
    ]
    return (
        <View style={{height:"100%"}}>
              {/* <Title style={{fontSize:24}}>Shashi gym</Title> */}
        <ScrollView>
            {plans.map((plan,key) =><div key={key} style={{paddingTop:10}} > 
                <WorkoutCard title={plan.title}/>
            </div> )}
            
        </ScrollView>
        </View>

    )

 }

 const AlbumsRoute = () => <Text>Comming soon</Text>;
 
 const RecentsRoute = () => <Text>trainer profile</Text>;
 export function HomeScreen(){
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'workout', title: 'Workout', icon: 'dumbbell' },
      { key: 'diet', title: 'Diet plan', icon: 'food-apple' },
      { key: 'trainer', title: 'Trainer', icon: 'account' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      workout: WorkoutsTab,
      diet: AlbumsRoute,
      trainer: RecentsRoute,
    });
  
    return(
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    )
 }