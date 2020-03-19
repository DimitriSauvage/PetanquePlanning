import { View, ActivityIndicator, ViewProps } from "react-native";
import styles from "./Style";
import React, { FunctionComponent } from "react";
import { Text } from "native-base";

//Props
interface LoaderProps extends ViewProps {
  loading: boolean;
}

//Components
const Loader: FunctionComponent<LoaderProps> = ({ loading }) => {
  return (
    loading && (
      <ActivityIndicator style={styles.loader} size="large"></ActivityIndicator>
    )
  );
};

export default Loader;
