import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PokemonActions from "./actions/pokemon.actions";
import Pokemon from './components/pokemon.component';
import IDex from "./models/dex.model";

import './App.scss';

interface IAppProps {
  dex: IDex,
  fetchPokemon: (id:number) => any
}

export class App extends React.Component<IAppProps> {
  constructor(public props: IAppProps) {
    super(props);
    this.props.fetchPokemon(376);
  }

  public render() {
    return (
      <div className="App">
        <Pokemon selected={this.props.dex.pokemon} />
      </div>
    );
  }
}

export const mapStateToProps = (state: IDex) => {
  return {
    dex: state
  }
};

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...PokemonActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
