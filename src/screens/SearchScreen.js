import React, { useState,useEffect } from "react";
import { Text, View , ScrollView} from "react-native";
import Search from "./Components/SearchBar";
import useResult from "./hooks/useResult";
import ResultList from "./Components/ResultList";

const Pretraga = () =>{
    const [find,setFind] = useState(``);
    const [searchApi,result,errmsg] = useResult()

    const FilterByPrice = (price) =>{
      return(
        result.filter(result=>{
          return result.price ===price;
        })
      )
    }

   
    return(
        <View style={{flex:1}}>
            <Search find={find} onFindChange={setFind}
            onFindSubmit={()=>searchApi(find)}/>
           {errmsg ? <Text>{errmsg}</Text> : null}
            <ScrollView>
            <ResultList title='Cost Effective' result={FilterByPrice('$')}/>
            <ResultList title='Bit pricier'  result={FilterByPrice('$$')}/>
            <ResultList title='Big spender'  result={FilterByPrice('$$$')}/>
            </ScrollView>
        </View>
    )
}
export default Pretraga;