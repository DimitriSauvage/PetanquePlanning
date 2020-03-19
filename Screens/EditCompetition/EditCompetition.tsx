import { useNavigation } from "@react-navigation/native";
import { Container, Content, Form, Input, Item } from "native-base";
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
    <Container>
      <Content>
        <Form>
          {/**Competition name */}
          <Item>
            <Input autoFocus={true} placeholder="Nom du concours"></Input>
          </Item>
          {/**Competition address */}
          <Item>
            <Input
              autoFocus={true}
              placeholder="Addresse"
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
      </Content>
    </Container>
  );
};

export default EditCompetition;
