import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Competition from "../../Models/Competition";

interface CompetitionDetailsScreenProps {
  competition: Competition;
}

const CompetitionsDetails: FunctionComponent<CompetitionDetailsScreenProps> = props => {
  //#region Add button in header bar for ios
  return <></>;
};

export default CompetitionsDetails;
