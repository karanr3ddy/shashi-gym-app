import React from "react";
import { Avatar, Card, Paragraph, Title } from "react-native-paper";
export function WorkoutCard({title,onPress}){
 
    return(
        <Card onPress={onPress}>
        <Card.Content>
          <Title style={{ fontFamily:"Bebas Neue"}}>{title}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
        )
}
