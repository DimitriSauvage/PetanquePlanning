import { View, ActivityIndicator } from "react-native";
import styles from "./Style";
import { FunctionComponent } from "react";

//Props
interface LoaderProps {
  loading: boolean;
}

//Components
const Loader: FunctionComponent<LoaderProps> = ({ loading }) => {
  return (
    loading && (
      <View style={styles.loader}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  );
};

export default Loader;
