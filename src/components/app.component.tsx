import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DexActions from "../actions/dex.actions";

import Filters from './filters.component';
import List from './list.component';
import Pokemon from './pokemon.component';

import IApp from '../models/app.model';
import IDex from "../models/dex.model";

import './app.component.scss';
import './block.component.scss';

interface IAppProps {
  dex: IDex,
  fetchPokemon: (url:string) => any,
  fetchPokemons: () => any,
  fetchTypes: (url?:string) => any,
  filterPokemons: (query:string) => any,
  selectPokemonByName: (name:string) => any,
  fetchMove: (url?:string) => any
}


interface IAppState { 
  type: string
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(public props: IAppProps) {
    super(props);
    this.state = {
      type: 'select'
    }
    this.props.fetchPokemons();
    this.props.fetchTypes();
    this.props.selectPokemonByName("eevee");
  }

  public type = (event:any) => {
    const query = event.target.value;
    this.setState({type: query });
    if(query === "select"){
      this.props.fetchPokemons();
    } else {
      this.props.fetchTypes(query);
    }
  }

  public render() {
    return (
      <div className="App">
        <div className="nav">
          <h2>The National Dex</h2>
          <Filters  list={this.props.dex.list}
                    type={this.state.type}
                    types={this.props.dex.types}
                    onFilter={this.props.filterPokemons}
                    onFetch={this.props.fetchPokemon}
                    onChangeType={this.type} />

          <List list={this.props.dex.list} load={this.props.fetchPokemon} />
        </div>
        <Pokemon 
          selected={this.props.dex.selected}
          moveEffect={this.props.dex.showShortEffect}
          changeMove={this.props.fetchMove}
          changeType={this.type}
          changePokemon={this.props.selectPokemonByName}
        />
      </div>
    );
  }
}

export const mapStateToProps = (state: IApp) => {
  return {
    dex: state.dex
  };
};

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...DexActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
