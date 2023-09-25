import React from "react";
import { Image, Text, View } from "react-native";
import { Container, Name, Photo } from "./css";
const ResultDetails = ({result}) =>{
    return(
        <Container>
        <Photo source={{uri: result.image_url}}/>
        <Name>{result.name}</Name>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </Container>
    )
}
export default ResultDetails;