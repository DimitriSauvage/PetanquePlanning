import { List } from "native-base";
import React, { FunctionComponent } from "react";
import { ViewProps } from "react-native";
import { connect } from "react-redux";
import Competition from "../../../Models/Competition";
import PetanquePlanningState from "../../../Models/PetanquePlanningState";
import ListProps from "../../Props/ListProps";
import CompetitionListItem from "../CompetitionListItem/CompetitionListItem";

//Props
interface CompetitionListProps extends ListProps<Competition>, ViewProps {}

//Components
const AddressList: FunctionComponent<CompetitionListProps> = ({
  elements,
  onSelect
}) => {
  return (
    elements?.length > 0 && (
      <List>
        {elements.map(competition => (
          <CompetitionListItem
            key={competition.id.toString()}
            element={competition}
            onSelect={competition =>
              onSelect ? onSelect(competition) : undefined
            }
          ></CompetitionListItem>
        ))}
      </List>
    )
  );
};

/**
 * Map the global app state to the props
 * @param state Global app state
 */
const mapStateToProps = (state: PetanquePlanningState) => {
  return {
    competitions: state.competitions
  };
};

export default connect(mapStateToProps)(AddressList);
