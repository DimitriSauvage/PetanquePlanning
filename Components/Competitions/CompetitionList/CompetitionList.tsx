import { List } from "native-base";
import React, { FunctionComponent } from "react";
import { ScrollView, ViewProps } from "react-native";
import { connect } from "react-redux";
import mapStateToProps from "../../../Store/mapStateToProps";
import ListProps from "../../Props/ListProps";
import CompetitionListItem from "../CompetitionListItem/CompetitionListItem";
import { CompetitionDTO } from "../../../Models/generated";

//Props
interface CompetitionListProps extends ListProps<CompetitionDTO>, ViewProps {}

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
              key={competition.Id.toString()}
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
