import { useNavigation } from "@react-navigation/native";
import { Form, Input, Item } from "native-base";
import React, { useState } from "react";
import Address from "../../Models/Address";
import SearchAddress from "../SearchAddress/SearchAddress";
import styles from "./Style";

const EditCompetition = () => {
  const navigator = useNavigation();
  const [address, setAddress] = useState<Address>(new Address());
  /**
   * Update the address
   * @param address Address to keep
   */
  const updateAddress = (address: Address) => setAddress(address);

  return (
    <Form>
      {/**Competition name */}
      <Item>
        <Input autoFocus={false} placeholder="Nom du concours"></Input>
      </Item>
      {/**Competition address */}
      <Item>
        <Input
          placeholder="Adresse"
          style={styles.input}
          value={address.getFullAddress()}
          onTouchStart={() => {
            //Go to search address
            navigator.navigate(SearchAddress.name, {
              onGoBack: updateAddress
            });
          }}
        ></Input>
      </Item>
    </Form>
  );
};

export default EditCompetition;
