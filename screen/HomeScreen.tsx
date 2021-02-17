import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { WorkoutCard } from '../components/WorkoutCard';
export function HomeScreen() {
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
        <ScrollView>
            {plans.map(plan =><div style={{paddingTop:10}} > 
                <WorkoutCard title={plan.title}/>
            </div> )}
            
        </ScrollView>
    )
 }