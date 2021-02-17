import React from "react";
import { Avatar, Card, Paragraph, Title } from "react-native-paper";
export function WorkoutCard(props:{title:string}){
    return(
        <Card>
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
        )
}
