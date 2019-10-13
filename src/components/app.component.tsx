import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DexActions from "../actions/dex.actions";
import Pokemon from './pokemon.component';

import IApp from '../models/app.model';
import IDex from "../models/dex.model";

import './app.component.scss';

interface IAppProps {
  dex: IDex,
  fetchPokemon: (id:number) => any,
  fetchMove: (url:string | undefined) => any
}

export class App extends React.Component<IAppProps> {
  constructor(public props: IAppProps) {
    super(props);
    this.props.fetchPokemon(133);
  }

  public render() {
    return (
      <div className="App">
        <Pokemon 
          selected={this.props.dex.selected}
          moveEffect={this.props.dex.showShortEffect}
          changeMove={this.props.fetchMove}
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
