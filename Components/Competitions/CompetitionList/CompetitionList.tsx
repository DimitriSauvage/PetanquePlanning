import { List } from "native-base";
import React, { FunctionComponent } from "react";
import { ScrollView, ViewProps } from "react-native";
import { connect } from "react-redux";
import Competition from "../../../Models/Competition";
import mapStateToProps from "../../../Store/mapStateToProps";
import ListProps from "../../Props/ListProps";
import CompetitionListItem from "../CompetitionListItem/CompetitionListItem";

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
