import * as _ from "lodash";
import { Form, Input, Item, Toast } from "native-base";
import React, { FunctionComponent, useEffect } from "react";
import { View } from "react-native";
import AddressList from "../../Components/Addresses/AddressList/AddressList";
import Loader from "../../Components/Shared/Loader/Loader";
import { useSearchAddress } from "../../Repositories/Addresses/useSearchAddress";
import styles from "./Style";
import { Address } from "../../Models/generated";

interface SearchAddressProps {
  route: any;
  navigation: any;
}

const SearchAddress: FunctionComponent<SearchAddressProps> = ({
  route,
  navigation
}) => {
  //#region Fields
  const { error, ongoing, result, setSearchedValue } = useSearchAddress();
  //#endregion

  //#region Methods
  useEffect(() => {
    if (error) {
      Toast.show({
        text: `Search error : ${error}`,
        type: "danger"
      });
    }
  }, [error]);

  //#endregion

  return (
    <View style={styles.container}>
      {/**Search input */}
      <Form style={styles.formContainer}>
        <Item>
          <Input
            autoFocus={true}
            placeholder="Taper pour rechercher"
            onChangeText={_.debounce(setSearchedValue, 500)}
          ></Input>
        </Item>
      </Form>

      <View style={styles.listContainer}>
        {/**Search results */}
        {!ongoing && result && result?.length > 0 && (
          <View>
            <AddressList
              elements={result}
              onSelect={(address: Address) => {
                //Call the function before go back
                if (route?.params?.onGoBack) route?.params?.onGoBack(address);
                navigation.goBack();
              }}
            />
          </View>
        )}

        {/**Display activity indicator if searching */}
        {ongoing && <Loader style={styles.loader} loading={ongoing} />}
      </View>
    </View>
  );
};

export default SearchAddress;
