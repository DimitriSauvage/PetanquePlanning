import { Button, Card, Form, Text, View } from "native-base";
import React, { FunctionComponent } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { compose } from "wizhooks/lib";
import AppInput from "../../Components/Shared/AppInput/AppInput";
import withKeyboardAvoidingView from "../../Shared/HOC/withKeyboardAvoidingView";
import BaseAction from "../../Store/Actions/Types/baseAction";
import mapDispatchToProps from "../../Store/mapDispatchToProps";
import styles from "./Style";

interface SignInProps {
  navigation: any;
  dispatch: <TPayload>(action: BaseAction<TPayload>) => void;
}

const SignIn: FunctionComponent<SignInProps> = (props) => {
  //#region Fields
  
  //#endregion


  return (
    <>
      {/**Display the logo */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/logo.png")}></Image>
      </View>

      {/**Other fields */}
      <View style={styles.otherFields}>
        {/**Form to sign in */}
        <Card style={styles.formContainer}>
          <Form>
            {/**Username */}
            <AppInput
              autoCompleteType="email"
              placeholder="Adresse mail"
              iconType="FontAwesome"
              iconName="user"
            ></AppInput>

            {/**Password */}
            <AppInput
              autoCompleteType="password"
              style={styles.passwordInput}
              secureTextEntry
              placeholder="Mot de passe"
              iconType="FontAwesome"
              iconName="lock"
            ></AppInput>
            {/**Forgotten password */}
            <Button
              style={styles.forgottenPassword}
              transparent
              onPress={() => alert("Fonctionnalité pas encore implémentée")}
            >
              <Text style={styles.forgottenPasswordText}>
                Mot de passe oublié
              </Text>
            </Button>

            {/**Button to submit */}
            <Button
              style={styles.submitButton}
              rounded
              info
              onPress={() => alert("Fonctionnalité pas encore implémentée")}
            >
              <Text>Se connecter</Text>
            </Button>
          </Form>
        </Card>

        {/**Button to go to signUp */}
        <View style={styles.signUp}>
          <Text>Vous n'avez pas de compte ?</Text>
          <Button
            dark
            rounded
            onPress={() => props.navigation.navigate("SignUp")}
            style={styles.signUpButton}
          >
            <Text>Inscrivez-vous</Text>
          </Button>
        </View>
      </View>
      {/**Display the form */}
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(compose(withKeyboardAvoidingView)(SignIn));
