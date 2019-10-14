import * as React from "react";
import IPokemonStat from "src/models/pokemon.stat.model";

interface IPokemonStatsProps {
  stats: IPokemonStat[];
}

export default class PokemonStats extends React.Component<IPokemonStatsProps> {
  constructor(public props: IPokemonStatsProps) {
    super(props);
  }

  public render() {
    return (
      <div className="block stats">
        {this.props.stats.map((element, key) => {
          return (
            <div key={key} className="stat">
              <span>
                {element.stat.name}: <i>{element.base_stat}</i>{" "}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
