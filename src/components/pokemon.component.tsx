import * as React from 'react';
import IPokemon from "src/models/pokemon.model";

import "./pokemon.component.scss";

interface IPokemonProps {
  selected: IPokemon
}

export default class Pokemon extends React.Component<IPokemonProps>  {  
  constructor(public props: IPokemonProps) {
    super(props);
  }

  public render() {
    return (
      <div className="pokemon">
        <h3 className="block title">
          {this.props.selected.id} - {this.props.selected.name}
        </h3>
        <div className="preview">
          <div className="block sprite">
            <img src={this.props.selected.sprites.front_default} alt=""/>
          </div>
          <div className="block physics">
            <span> Height: {this.props.selected.height} </span>
            <span> Weight: {this.props.selected.weight} </span>
          </div>
        </div>
      </div>
    );
  }
}

