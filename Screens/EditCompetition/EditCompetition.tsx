import React, { useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
import Address from "../../Models/Address";

export default () => {
  const navigator = useNavigation();
  const [address, setAddress] = useState<Address>(null);
  /**
   * Update the address
   * @param address Address to keep
   */
  const updateAddress = (address: Address) => setAddress(address);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput autoFocus={true} placeholder="Nom du concours"></TextInput>
      <TextInput
        autoFocus={true}
        editable={false}
        placeholder="Adresse"
        style={styles.input}
        value={address.getFullAddress()}
        onTouchStart={() => {
          //Go to search address
          navigator.navigate("SearchAddress", {
            onGoBack: updateAddress
          });
        }}
      ></TextInput>
    </SafeAreaView>
  );
};
