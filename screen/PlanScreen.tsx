import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { List, Title } from 'react-native-paper';
import { WorkoutCard } from '../components/WorkoutCard';
export function PlanScreen() {
    const workouts:Array<{title: string}> = [
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
              <Title style={{fontSize:24}}>Shashi gym</Title>
        <ScrollView>
            {workouts.map((plan,key) =><div key={key} style={{paddingTop:10}} > 
            <List.Item title={plan.title}
             description="Item description"
             left={props => <List.Icon {...props} icon="folder" />}
             />
            </div> )}
            
        </ScrollView>
        </View>

    )

 }