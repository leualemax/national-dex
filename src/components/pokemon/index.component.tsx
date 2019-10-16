import * as React from "react";
import * as PokemonTypes from 'src/store/pokemon/types';
import * as PokemonActions from 'src/store/pokemon/actions';

import { connect } from 'react-redux';

import styled from "styled-components";
import { bindActionCreators, Dispatch } from 'redux';
import PokemonVisor from './visor.component';
import PokemonType from './type.component';
import PokemonStats from './status.component';
import PokemonMoves from './moves.component';
import PokemonEvolutions from './evolutions.component';
import { Panel } from 'src/components/styles/panel.component.style'; import { AppStates } from 'src/store';
;

export const PokemonDiv = styled.div`
	display: flex;
	text-align: left;
  flex-direction: column;
  height: 100%;
`;

interface StateProps {
  data?: PokemonTypes.Data
}

interface DispatchProps {
  getRequest(id: number): void
}

type Props = StateProps & DispatchProps

export class Pokemon extends React.Component<Props> {

  componentDidMount() {
    this.props.getRequest(153);
  }


  flavorTextToDescription = (flavorTextEntries: any[]) => {
    const enText = flavorTextEntries.filter((textEntrie: any) => {
      return textEntrie && textEntrie.language.name === "en";
    });

    return enText.length === 0 ? "" : enText[0].flavor_text;
  };

  changeType = () => "true";

  render() {
    return this.props.data ? (
      <PokemonDiv>
        <PokemonVisor
          name={`${this.props.data.pokemon.id} - ${this.props.data.pokemon.name}`}
          src={this.props.data.pokemon.sprites.front_default}
          description={this.flavorTextToDescription(this.props.data.species.flavor_text_entries)}
        />

        <PokemonType
          types={this.props.data.pokemon.types}
          onChange={this.changeType}
        />

        <Panel>
          <PokemonStats
            stats={this.props.data.pokemon.stats}
            weight={this.props.data.pokemon.weight}
            height={this.props.data.pokemon.height}
          />

          <PokemonMoves
            moves={this.props.data.pokemon.moves}
            onChange={this.changeType}
            effect={''}
          />

          <PokemonEvolutions
            evolutions={this.props.data.evolutions.chain}
            onChange={this.changeType}
          />
        </Panel>
      </PokemonDiv>
    ) : <p>Loading...</p>;
  }
}

const mapStateToProps = (state: AppStates) => ({
  data: state.pokemon.data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(PokemonActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);