import { Text } from "native-base";
import React, { FunctionComponent } from "react";
import { ViewProps } from "react-native";
import styles from "./Style";

//Props
interface LabeledValueProps extends ViewProps {
  label: string;
  value: string;
  breakLine?: boolean;
}

//Components
const LabeledValue: FunctionComponent<LabeledValueProps> = (props) => {
  return (
    <Text>
      <Text style={styles.label}>{props.label}</Text>&nbsp;&#58;&nbsp;
      {props.breakLine && "\n"}
      <Text>{props.value}</Text>
    </Text>
  );
};

export default LabeledValue;
