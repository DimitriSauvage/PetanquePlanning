import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Card, CardItem, Toast, View } from "native-base";
import React, { FunctionComponent } from "react";
import Map from "../../Components/Competitions/Map/Map";
import LabeledValue from "../../Components/Shared/LabeledValue/LabeledValue";
import TooltipButton from "../../Components/Shared/TooltipButton/TooltipButton";
import Club from "../../Models/Club";
import Competition from "../../Models/Competition";
import CompetitionGender from "../../Models/Enums/CompetitionGender";
import GlobalStyles from "../../Styles";
import styles from "./Style";

interface CompetitionDetailsScreenProps {
  competition: Competition;
  route: any;
}

const CompetitionDetails: FunctionComponent<CompetitionDetailsScreenProps> = props => {
  //#region Fields
  /**
   * Competition to display
   */
  const competition = props.route?.params?.competition as Competition;
  /**
   * Navigation manager
   */
  const navigation = useNavigation();
  //#endregion

  //#region Config
  //Change the header bar title to display the competition name
  if (competition.name && competition.name.trim() !== "") {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: competition.name
      });
    }, [competition]);
  }

  //#endregion

  competition.organizer = new Club();
  competition.organizer.name = "Sporting pétanque club Bouillé-Bel-Air";
  competition.organizer.shortName = "SPCBB";
  if (!competition) {
    Toast.show({
      text: "Erreur lors de la récupération du concours ",
      type: "danger"
    });
    navigation.goBack();
  } else {
    return (
      <View style={styles.container}>
        {/**Competition details */}
        <View style={styles.informations}>
          {/**Type, Gender, Sport */}
          <View style={styles.competitionTypes}>
            {/**Sport */}
            <TooltipButton
              buttonText={competition.competitionSport}
              buttonColor="primary"
              tooltipText="Sport du concours (Pétanque ou jeu provençal)"
              tooltipPlacement="bottom"
            ></TooltipButton>
            {/**Type */}
            <TooltipButton
              buttonText={competition.competitionType}
              buttonColor="success"
              tooltipText="Type du concours (Tête à tête, Doublette, Triplette, Tir de précision)"
              tooltipPlacement="bottom"
            ></TooltipButton>
            {/**Gender */}
            <TooltipButton
              buttonText={competition.competitionGender}
              buttonColor="info"
              tooltipText="Composition des équipes (Féminin, Maculin, Mixte, Libre)"
              tooltipPlacement="bottom"
              icon={
                competition.competitionGender === CompetitionGender.Unspecified
                  ? "ios-information-circle-outline"
                  : null
              }
              iconType="Ionicons"
            ></TooltipButton>
          </View>

          {/**Other details */}
          <View style={styles.competitionDetails}>
            {/**Date and hour */}
            <Card>
              <CardItem style={[GlobalStyles.flexContainer, styles.datetime]}>
                <View style={GlobalStyles.flexItem}>
                  <LabeledValue
                    style={GlobalStyles.flexItem}
                    label="Date"
                    value={moment(competition.date).format("L")}
                  ></LabeledValue>
                </View>
                <View style={GlobalStyles.flexItem}>
                  <LabeledValue
                    style={GlobalStyles.flexItem}
                    label="Jet du but"
                    value={moment(competition.hour).format("LT")}
                  ></LabeledValue>
                </View>
              </CardItem>
            </Card>

            {/**Organizer */}
            {competition.organizer && (
              <Card>
                <CardItem>
                  <LabeledValue
                    label="Organisateur"
                    value={competition.organizer.shortName}
                  ></LabeledValue>
                </CardItem>
              </Card>
            )}

            {/**Description */}
            {competition.description && competition.description.trim() !== "" && (
              <Card>
                <CardItem>
                  <LabeledValue
                    style={GlobalStyles.flexItem}
                    label="Description"
                    breakLine={true}
                    value={competition.description}
                  ></LabeledValue>
                </CardItem>
              </Card>
            )}

            <Card>
              <CardItem>
                <LabeledValue
                  label="Adresse"
                  value={competition.address.getFullAddress()}
                ></LabeledValue>
              </CardItem>
            </Card>
          </View>
        </View>

        {/**Map */}
        <View style={styles.map}>
          <Map competitions={[competition]}></Map>
        </View>
      </View>
    );
  }
};

export default CompetitionDetails;
