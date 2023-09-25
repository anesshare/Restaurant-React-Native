import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components";
import {Feather} from '@expo/vector-icons'

const Search = ({ find, onFindChange, onFindSubmit }) => {
    return (
      <SearchBar>
        <Feather name="search" size={40} />
        <Input
  autoCapitalize="none"
  autoCorrect={false}
  value={find}
  onChangeText={(newFind) => onFindChange(newFind)}
  onEndEditing={() => onFindSubmit()} // Invoke onFindSubmit directly when editing ends
  placeholder="Search..."
/>
      </SearchBar>
    );
  };
  


const SearchBar = styled.View`
width: 90%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
border-radius: 20px;
background-color: #F0EEEE;
align-self: center;
margin-top: 10px;
margin-bottom: 10px;
`
const Input = styled.TextInput`
flex: 1;
height: 100%;
`

export default Search;