import { useNavigation } from "@react-navigation/native";
import { Button, Form, View } from "native-base";
import React, { FunctionComponent } from "react";
import { Image, Text } from "react-native";
import { connect } from "react-redux";
import { compose } from "wizhooks/lib";
import AppInput from "../../Components/Shared/AppInput/AppInput";
import withKeyboardAvoidingView from "../../Shared/HOC/withKeyboardAvoidingView";
import BaseAction from "../../Store/Actions/Types/baseAction";
import mapDispatchToProps from "../../Store/mapDispatchToProps";
import mapStateToProps from "../../Store/mapStateToProps";
import styles from "./Style";

interface SignInProps {
  navigation: any;
  dispatch: <TPayload>(action: BaseAction<TPayload>) => void;
}

const SignIn: FunctionComponent<SignInProps> = (props) => {
  const t = useNavigation();
  return (
    <>
      {/**Display the logo */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/logo.png")}
        ></Image>
      </View>

      {/**Other fields */}
      <View style={styles.otherFields}>
        {/**Form to sign in */}
        <Form>
          {/**Username */}
          <AppInput
            placeholder="Nom d'utilisateur"
            iconType="FontAwesome"
            iconName="user"
          ></AppInput>

          {/**Password */}
          <View style={styles.passwordInput}>
            <AppInput
              secureTextEntry
              placeholder="Mot de passe"
              iconType="FontAwesome"
              iconName="lock"
            ></AppInput>
          </View>

          {/**Forgotten password */}
          <View style={styles.forgottenPassword}>
            <Button
              transparent
              onPress={() => alert("Fonctionnalité pas encore implémentée")}
            >
              <Text>Mot de passe oublié</Text>
            </Button>
          </View>

          {/**Button to submit */}
          <View style={styles.submitButton}>
            <Button
              rounded
              onPress={() => alert("Fonctionnalité pas encore implémentée")}
            >
              <Text>Se connecter</Text>
            </Button>
          </View>
        </Form>

        {/**Button to go to signUp */}
        <View style={styles.signUp}>
          <Text>Vous n'avez pas de compte ?</Text>
          <Button
            transparent
            dark
            onPress={() => props.navigation.navigate("signUp")}
          ></Button>
        </View>
      </View>
      {/**Display the form */}
    </>
  );
};

export default connect(
  mapStateToProps("clubs"),
  mapDispatchToProps
)(compose(withKeyboardAvoidingView)(SignIn));
