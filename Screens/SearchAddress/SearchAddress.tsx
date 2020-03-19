import * as _ from "lodash";
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Toast
} from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressList from "../../Components/Addresses/AddressList/AddressList";
import Loader from "../../Components/Shared/Loader/Loader";
import Address from "../../Models/Address";
import addressRepository from "../../Repositories/AddressRepository";
import styles from "./Style";

const SearchAddress = () => {
  //#region Fields
  /**
   * Addresses to display
   */
  const [addresses, setAddresses] = useState([] as Address[]);
  /**
   * If search in progress
   */
  const [searching, setSearching] = useState(false);
  //#endregion

  //#region Methods
  /**
   * Search addresses
   * @param value Value to search
   */
  const searchAddresses = async value => {
    try {
      setSearching(true);
      setAddresses(await addressRepository.searchAddress(value));
    } catch (error) {
      // Message for the error
      Toast.show({
        text: `Search error : ${error}`,
        type: "danger"
      });
    } finally {
      setSearching(false);
    }
  };

  //#endregion

  const [address, setAddress] = useState(null);

  return (
    <SafeAreaView>
      {/**Search input */}
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Taper pour rechercher</Label>
              <Input onChange={_.debounce(searchAddresses, 500)}></Input>
              <Text>{JSON.stringify(address)}</Text>
            </Item>
          </Form>
        </Content>
      </Container>

      <View style={styles.listContainer}>
        {/**Search results */}
        {addresses && addresses?.length > 0 && (
          <AddressList
            addresses={addresses}
            onSelect={address => {
              setAddress(address);
            }}
          />
        )}

        {/**Display activity indicator if searching */}
        {searching && <Loader loading={searching} />}
      </View>
    </SafeAreaView>
  );
};

export default SearchAddress;
