import { Button, Card, Form, Text, Toast, View } from "native-base";
import React, { FunctionComponent, useContext, useEffect } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import AppInput from "../../Components/Shared/AppInput/AppInput";
import Loader from "../../Components/Shared/Loader/Loader";
import useSignIn from "../../Repositories/Authentication/useSignIn";
import ConnectedUserContext from "../../Shared/Contexts/ConnectedUserContext";
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
  /**Sign in manager */
  const SignInManager = useSignIn();
  /**Get the connected user context */
  const { setConnectedUser } = useContext(ConnectedUserContext);
  //#endregion

  //#region Methods
  /**Display a message if the credentials are bad */
  useEffect(() => {
    if (SignInManager.invalidCredentials) {
      Toast.show({
        text: "Adresse email ou mot de passe incorrect",
        type: "danger",
        position: "top",
      });
    }
  }, [SignInManager.invalidCredentials]);

  /**Display a message if there is an error */
  useEffect(() => {
    if (SignInManager.error && !SignInManager.ongoing) {
      Toast.show({
        text: SignInManager.error.message,
        type: "danger",
        position: "top",
        duration: 1500,
      });
    }
  }, [SignInManager.error, SignInManager.ongoing]);

  /**Update the connected user */
  useEffect(() => {
    if (
      SignInManager.result &&
      !SignInManager.ongoing &&
      !SignInManager.error
    ) {
      setConnectedUser(SignInManager.result);
    }
  }, [SignInManager.result]);

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
              autoCapitalize="none"
              autoCompleteType="email"
              placeholder="Adresse mail"
              iconType="FontAwesome"
              iconName="user"
              onChangeText={(email) => SignInManager.setEmail(email)}
            ></AppInput>

            {/**Password */}
            <AppInput
              autoCapitalize="none"
              autoCompleteType="password"
              style={styles.passwordInput}
              secureTextEntry
              placeholder="Mot de passe"
              iconType="FontAwesome"
              iconName="lock"
              onChangeText={(password) => SignInManager.setPassword(password)}
            ></AppInput>
            {/**Forgotten password */}
            <Button
              transparent
              small
              style={styles.forgottenPassword}
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
              onPress={() => SignInManager.launchSignIn()}
            >
              {SignInManager.ongoing ? (
                <Loader></Loader>
              ) : (
                <Text>Se connecter</Text>
              )}
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
)(withKeyboardAvoidingView(SignIn));
