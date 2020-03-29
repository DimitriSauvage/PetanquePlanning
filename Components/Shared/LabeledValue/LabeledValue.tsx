import { Badge, Button, Icon, Text, Content, View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { ViewProps } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import styles from "./Style";

//Props
interface LabeledValueProps extends ViewProps {
  label: string;
  value: string;
  breakLine?: boolean;
}

//Components
const LabeledValue: FunctionComponent<LabeledValueProps> = props => {
  return (
    <Text>
      <Text style={styles.label}>{props.label}</Text>&nbsp;&#58;&nbsp;
      {props.breakLine && "\n"}
      <Text>{props.value}</Text>
    </Text>
  );
};

export default LabeledValue;
