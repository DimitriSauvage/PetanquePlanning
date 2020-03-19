import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAddress from "../SearchAddress/SearchAddress";

const Search = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Rechercher"
        onPress={() => navigation.navigate(SearchAddress.name)}
      ></Button>
      <Text>Ici c'est la recherche</Text>
    </SafeAreaView>
  );
};

export default Search;
