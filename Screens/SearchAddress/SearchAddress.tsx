import * as _ from "lodash";
import { Form, Input, Item, Toast, Separator, Text } from "native-base";
import React, { useState, FunctionComponent } from "react";
import { View } from "react-native";
import AddressList from "../../Components/Addresses/AddressList/AddressList";
import Loader from "../../Components/Shared/Loader/Loader";
import Address from "../../Models/Address";
import addressRepository from "../../Repositories/AddressRepository";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";

interface SearchAddressProps {
  /**
   * Method to execute when close the screen
   */
  route: any;
  navigation: any;
}

const SearchAddress: FunctionComponent<SearchAddressProps> = ({
  route,
  navigation
}) => {
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
      const result = await addressRepository.searchAddress(value);
      setAddresses(result);
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

  return (
    <View style={styles.container}>
      {/**Search input */}
      <Form style={{ backgroundColor: "#D0D0D0" }}>
        <Item>
          <Input
            autoFocus={true}
            placeholder="Taper pour rechercher"
            onChangeText={_.debounce(searchAddresses, 500)}
          ></Input>
        </Item>
      </Form>

      <View style={styles.listContainer}>
        {/**Search results */}
        {!searching && addresses && addresses?.length > 0 && (
          <View>
            <AddressList
              addresses={addresses}
              onSelect={(address: Address) => {
                //Call the function before go back
                if (route?.params?.onGoBack) route?.params?.onGoBack(address);
                navigation.goBack();
              }}
            />
          </View>
        )}

        {/**Display activity indicator if searching */}
        {searching && <Loader style={styles.loader} loading={searching} />}
      </View>
    </View>
  );
};

export default SearchAddress;
