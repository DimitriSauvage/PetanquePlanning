import { List } from "native-base";
import React, { FunctionComponent } from "react";
import { ViewProps, ScrollView } from "react-native";
import { connect } from "react-redux";
import Competition from "../../../Models/Competition";
import ListProps from "../../Props/ListProps";
import CompetitionListItem from "../CompetitionListItem/CompetitionListItem";
import PetanquePlanningState from "../../../Store/States/PetanquePlanningState";
import mapStateToProps from "../../../Store/mapStateToProps";

//Props
interface CompetitionListProps extends ListProps<Competition>, ViewProps {}

//Components
const AddressList: FunctionComponent<CompetitionListProps> = ({
  elements,
  onSelect,
}) => {
  return (
    elements?.length > 0 && (
      <ScrollView>
        <List>
          {elements.map((competition) => (
            <CompetitionListItem
              key={competition.id.toString()}
              element={competition}
              onSelect={(competition) =>
                onSelect ? onSelect(competition) : undefined
              }
            ></CompetitionListItem>
          ))}
        </List>
      </ScrollView>
    )
  );
};

export default connect(mapStateToProps("competitions"))(AddressList);
