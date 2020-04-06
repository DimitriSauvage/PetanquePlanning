import { Badge, Button, Icon, Text, Content, View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { ViewProps } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import styles from "./Style";
import IconType from "../../../Models/Types/IconType";

//Props
interface TooltipButtonProps extends ViewProps {
  buttonText: string;
  buttonColor?: "primary" | "info" | "success" | "warning" | "danger" | "dark";
  tooltipText: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right" | "center";
  icon?: string;
  iconType?: IconType;
}

//Components
const TooltipButton: FunctionComponent<TooltipButtonProps> = (props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  //#region Methods
  /**
   * Check if the button has this color
   * @param color Color to check
   */
  const hasColor = (color) => props?.buttonColor === color;
  //#endregion
  return (
    <View style={styles.container}>
      <Tooltip
        tooltipStyle={{ marginTop: -30 }}
        isVisible={isTooltipVisible}
        showChildInTooltip={false}
        content={<Text>{props.tooltipText}</Text>}
        placement={props.tooltipPlacement ? props.tooltipPlacement : "center"}
        onClose={() => setTooltipVisible(false)}
      >
        <Button
          style={styles.button}
          iconRight={props.icon && props.icon !== ""}
          onPress={() => setTooltipVisible(true)}
          small
          primary={hasColor("primary")}
          info={hasColor("info")}
          success={hasColor("success")}
          warning={hasColor("warning")}
          danger={hasColor("danger")}
          dark={hasColor("dark")}
        >
          <Text>{props.buttonText}</Text>
          {props.icon && (
            <Icon
              name={props.icon}
              type={props.iconType ? props.iconType : "FontAwesome5"}
            />
          )}
        </Button>
      </Tooltip>
    </View>
  );
};

export default TooltipButton;
