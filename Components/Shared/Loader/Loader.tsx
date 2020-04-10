import React, { FunctionComponent } from "react";
import { ActivityIndicator, ViewProps } from "react-native";
import styles from "./Style";
import _ from "lodash";

//Props
interface LoaderProps extends ViewProps {
  loading?: boolean;
}

//Components
const Loader: FunctionComponent<LoaderProps> = ({ loading }) => {
  const ongoing = _.isUndefined(loading) || _.isNull(loading) || loading;
  return (
    ongoing && (
      <ActivityIndicator style={styles.loader} size="large"></ActivityIndicator>
    )
  );
};

export default Loader;
