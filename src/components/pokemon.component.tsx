import * as React from 'react';

import IPokemon from "src/models/pokemon.model";

import PokemonEvolutions from './pokemon.evolutions.component';
import PokemonMoves from './pokemon.moves.component';
import PokemonStats from './pokemon.stats.component';
import PokemonTypes from './pokemon.types.component';

import "./pokemon.component.scss";


interface IPokemonProps {
  selected: IPokemon,
  moveEffect?: string,
  changeType: (type: string ) => any
  changePokemon: (type: string ) => any
  changeMove: (url: string | undefined) => any
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
          { 
            this.props.selected.description && 
            <div className="block description">
              {this.props.selected.description}
            </div> 
          }
        </div>

        <div className="block physics stats">
            <span> Height: <i>{this.props.selected.height}</i>  </span>
            <span> Weight: <i>{this.props.selected.weight}</i>  </span>
          </div>
        
        
        <PokemonTypes 
            types={this.props.selected.types} 
            onChange={this.props.changeType}
        />

        <h5>Stats</h5>
        <PokemonStats stats={this.props.selected.stats} />

        <h5>Moves</h5>
        <PokemonMoves moves={this.props.selected.moves}
                      onChange={this.props.changeMove}
                      effect={this.props.moveEffect} />

        <h5>Evolution Chain</h5>
        <PokemonEvolutions evolutions={this.props.selected.evolutions} 
                           onChange={this.props.changePokemon}/>
      </div>
    );
  }
}
