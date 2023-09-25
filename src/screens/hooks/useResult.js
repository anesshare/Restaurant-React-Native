import React, { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [result, setResult] = useState([]);
    const [errmsg, setErrmsg]= useState("");
    const searchApi = async ( searchTerm) => {
        try {
          const resp = await yelp.get('/search', {
            params: {
              limit: 50,
              term: searchTerm,
              location: 'san jose'
            }
          });
          setResult(resp.data.businesses);
        } catch (error) {
          setErrmsg('Oops...Something went wrong!')
        }
      }
      useEffect(()=>{
      searchApi('pasta')
      },[])
      return[searchApi,result,errmsg]
}