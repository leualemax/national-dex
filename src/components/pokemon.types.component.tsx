import * as React from 'react';
import IPokemonType from 'src/models/pokemon.type.model';

interface IPokemonMovesProps {
  types: IPokemonType[],
}

export default class PokemonMoves extends React.Component<IPokemonMovesProps>  {  
  constructor(public props: IPokemonMovesProps) {
    super(props);
  }

  public render() {
    return (
      <div className="types">
      {
        this.props.types.map((element, key) => {
          return (
          <button key={key} className="type">
            {element.type.name}
          </button>);
        })
      }
    </div>
    )
  }
}
