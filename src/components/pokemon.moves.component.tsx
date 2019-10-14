import * as React from "react";
import IPokemonMove from "src/models/pokemon.move.model";

interface IPokemonMovesProps {
  moves: IPokemonMove[];
  effect?: string;
  onChange: (e?: string) => void;
}

export default class PokemonMoves extends React.Component<IPokemonMovesProps> {
  constructor(public props: IPokemonMovesProps) {
    super(props);
  }

  public loadMove = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      event.target.value !== "select" ? event.target.value : undefined;
    this.props.onChange(value);
  };

  public render() {
    return (
      <div className="block moves">
        <select className="block" onChange={this.loadMove}>
          <option value="select">Select Move</option>
          {this.props.moves.map((element, key) => {
            return (
              <option key={key} value={element.move.url}>
                {element.move.name}
              </option>
            );
          })}
        </select>
        <p>{this.props.effect}</p>
      </div>
    );
  }
}
