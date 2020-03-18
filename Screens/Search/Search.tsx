import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Rechercher"
        onPress={() => navigation.navigate("SearchAddress")}
      ></Button>
      <Text>Ici c'est la recherche</Text>
    </SafeAreaView>
  );
};
