import React from 'react';
import {Text,Image} from 'react-native'
import { Appbar } from 'react-native-paper';
export function WorkoutScreen({navigation}){
    return(
        <div>
      <Appbar>
            <Appbar.Action
          icon="chevron-left"
          onPress={() => navigation.goBack()}
         />
       </Appbar>
            <Text>
            <Image
          style={{width: 300, height: 200}}
          source={{uri: '/assets/workout.gif'}} />
                workout screen
            </Text>
        </div>
    )
}