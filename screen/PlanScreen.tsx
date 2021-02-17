import React from 'react';
import { ScrollView} from 'react-native';
import { Appbar, List, Title } from 'react-native-paper';
export function PlanScreen({navigation}) {
    const workouts:Array<{title: string}> = [
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
        {
            title: 'workout name'
        },
    ]
    return (
        <div> <Appbar>
        <Appbar.Action
          icon="chevron-left"
          onPress={() => navigation.goBack()}
         />
       </Appbar>
       <ScrollView style={{height:"100%"}}>
            {workouts.map((plan,key) =><div key={key} style={{paddingTop:10}} > 
            <List.Item title={plan.title}
             description="Item description"
             left={props => <List.Icon {...props} icon="dumbbell" />}
             />
            </div> )}
            
        </ScrollView>
        </div>
 
 

    )

 }
 