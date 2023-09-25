import React from "react";
import { Text,View,FlatList, TouchableOpacity } from "react-native";
import { Naslov, ResListCont } from "./css";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({title,result,navigation}) =>{
    if(!result.length){
        return null;
    }
return(
    <ResListCont>
    <Naslov>{title}</Naslov>
    <FlatList 
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={result}
    keyExtractor={(result)=>result.id}
    renderItem={({item})=>{
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('ShowResult',{id:item.id})}>
        <ResultDetails result={item}/>
        </TouchableOpacity>)

        
    }}
    />
    </ResListCont>
)
}


export default withNavigation(ResultList);