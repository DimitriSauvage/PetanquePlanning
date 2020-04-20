import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Card, CardItem, Toast, View } from "native-base";
import React, { FunctionComponent } from "react";
import Map from "../../Components/Competitions/Map/Map";
import LabeledValue from "../../Components/Shared/LabeledValue/LabeledValue";
import TooltipButton from "../../Components/Shared/TooltipButton/TooltipButton";
import GlobalStyles from "../../Styles";
import styles from "./Style";
import {
  CompetitionDTO,
  ClubDTO,
  CompetitionGenderEnum,
} from "../../Models/generated";

interface CompetitionDetailsScreenProps {
  competition: CompetitionDTO;
  route: any;
}

const CompetitionDetails: FunctionComponent<CompetitionDetailsScreenProps> = (
  props
) => {
  //#region Fields
  /**
   * Competition to display
   */
  const competition = props.route?.params?.competition as CompetitionDTO;
  /**
   * Navigation manager
   */
  const navigation = useNavigation();
  //#endregion

  //#region Config
  //Change the header bar title to display the competition name
  if (competition.Name && competition.Name.trim() !== "") {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: competition.Name,
      });
    }, [competition]);
  }

  //#endregion

  if (__DEV__) {
    competition.Organizer = new ClubDTO();
    competition.Organizer.Name = "Sporting pétanque club Bouillé-Bel-Air";
    competition.Organizer.ShortName = "SPCBB";
  }

  if (!competition) {
    Toast.show({
      text: "Erreur lors de la récupération du concours",
      type: "danger",
    });
    navigation.goBack();
  } else {
    return (
      <View style={styles.container}>
        {/**Competition details */}
        <View style={styles.informations}>
          {/**Type, Gender */}
          <View style={styles.competitionTypes}>
            {/**Sport */}
            <TooltipButton
              buttonText={competition.CompetitionSport.Value}
              buttonColor="primary"
              tooltipText="Sport du concours (Pétanque ou jeu provençal)"
              tooltipPlacement="bottom"
            ></TooltipButton>
            {/**Type */}
            <TooltipButton
              buttonText={competition.CompetitionType.Value}
              buttonColor="success"
              tooltipText="Type du concours (Tête à tête, Doublette, Triplette, Tir de précision...)"
              tooltipPlacement="bottom"
            ></TooltipButton>
          </View>
          {/** Sport, Level */}
          <View style={styles.competitionTypes}>
            {/**Gender */}
            <TooltipButton
              buttonText={competition.CompetitionGender.Value}
              buttonColor="info"
              tooltipText="Composition des équipes (Féminin, Maculin, Mixte, Libre...)"
              tooltipPlacement="bottom"
              icon={
                competition.CompetitionGender.Value ===
                CompetitionGenderEnum.Unspecified.toString()
                  ? "ios-information-circle-outline"
                  : null
              }
              iconType="Ionicons"
            ></TooltipButton>
            {/**Level */}
            <TooltipButton
              buttonText={competition.CompetitionLevel.Value}
              buttonColor="dark"
              tooltipText="Niveau du concours (Départemental, régional, national...)"
              tooltipPlacement="bottom"
            ></TooltipButton>
          </View>

          {/**Other details */}
          <View style={styles.competitionDetails}>
            {/**Date and hour */}
            <Card>
              <CardItem>
                <View style={[styles.datetime, GlobalStyles.flexContainer]}>
                  <View>
                    <LabeledValue
                      label="Date"
                      value={moment(competition.Date).format("L")}
                    ></LabeledValue>
                  </View>
                  <View style={GlobalStyles.flexItem}>
                    <LabeledValue
                      label="Jet du but"
                      value={moment(competition.Date).format("LT")}
                    ></LabeledValue>
                  </View>
                </View>
              </CardItem>
            </Card>

            {/**Organizer */}
            {competition.Organizer && (
              <Card>
                <CardItem>
                  <LabeledValue
                    label="Organisateur"
                    value={competition.Organizer.ShortName}
                  ></LabeledValue>
                </CardItem>
              </Card>
            )}

            {/**Description */}
            {competition.Description && competition.Description.trim() !== "" && (
              <Card>
                <CardItem>
                  <LabeledValue
                    style={GlobalStyles.flexItem}
                    label="Description"
                    breakLine={true}
                    value={competition.Description}
                  ></LabeledValue>
                </CardItem>
              </Card>
            )}

            <Card>
              <CardItem>
                <LabeledValue
                  label="Adresse"
                  value={competition.Address.FullAddress}
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
