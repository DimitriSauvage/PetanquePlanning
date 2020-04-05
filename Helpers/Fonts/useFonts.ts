import { useState, useEffect } from "react";
import * as Font from "expo-font";

export interface UseFontsResult {
  ongoing: boolean;
}

export default () => {
  const [ongoing, setOngoing] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async () => {
      setOngoing(true);
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      setOngoing(false);
    };
    loadFonts();
  }, []);
  return { ongoing };
};
