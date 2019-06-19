import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
