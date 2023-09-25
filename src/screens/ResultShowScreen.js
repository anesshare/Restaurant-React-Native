import React, { useEffect, useState } from "react";
import { FlatList, Image, Text } from "react-native";
import yelp from '././api/yelp'
import { Naslov } from "./Components/css";

const ResultShowScreen = ({navigation}) =>{
    const [result,setResult]= useState(null);
   const id= navigation.getParam('id')
   const fetchBusiness = async()=>{
   const resp = await yelp.get(`/${id}`);
   setResult(resp.data)
   }
   useEffect(()=>{
    fetchBusiness(id);
   },[])
   if(!result){
    return(
        <Naslov>Loading...</Naslov>
    )
   }
    return(
        <>
        <Naslov>{result.name}</Naslov>
        <FlatList 
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return(
                <Image style={{width:200,height:200}} source={{uri: item}}/>
            )
        }}
        />
        </>
    )
}
export default ResultShowScreen;