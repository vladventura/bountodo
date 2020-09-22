import React from "react";
import rarities from "./rarities";
import { connect } from "react-redux";
import { setRarity } from "../../store/actions/todoActions";
import { Picker } from "@react-native-community/picker";

class RarityPicker extends React.Component {
    
  componentDidMount() {
    this.props.setRarity(rarities[0]);
  }

  render() {
    return (
      <Picker
        onValueChange={(item, index) => {
          this.props.setRarity(rarities[index]);
        }}
        selectedValue={this.props.raritySelected}
      >
        {rarities.map((rarity) => (
          <Picker.Item
            key={rarity.name}
            label={rarity.name}
            value={rarity.name}
          />
        ))}
      </Picker>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    raritySelected: state.todo.todo.rarity?.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRarity: (rarity) => dispatch(setRarity(rarity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RarityPicker);
