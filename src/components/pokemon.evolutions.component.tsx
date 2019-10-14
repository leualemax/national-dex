import * as React from 'react';
import IEvolution from 'src/models/evolution.model';

interface IPokemonEvolutionsProps {
  evolutions?: IEvolution,
  onChange: (e: any) => void
}

export default class PokemonEvolutions extends React.Component<IPokemonEvolutionsProps>  {  
  constructor(public props: IPokemonEvolutionsProps) {
    super(props);
  }

  public onChange = (e:any) => this.props.onChange(e.target.value);

  public chain(evolution:IEvolution | IEvolution[])  {
    return Array.isArray(evolution) ? evolution.map((e:IEvolution, key:number) => {
        return (<li key={key}>
          <button onClick={this.onChange} value={e.species.name}>
            {e.species.name}
          </button>
          {
            !Array.isArray(e) && Array.isArray(e.evolves_to) && e.evolves_to.length > 0 &&
            this.evolutions(e.evolves_to)
          }
        </li>)
      }) : <li>
        <button onClick={this.onChange} value={evolution.species.name}>
          {evolution.species.name}
        </button>
        {
          !Array.isArray(evolution) && Array.isArray(evolution.evolves_to) &&
          this.evolutions(evolution.evolves_to)
        }
      </li>
  }

  public evolutions(evolution?: IEvolution | IEvolution[]): React.ReactElement | undefined {
    evolution = evolution || this.props.evolutions;
    evolution = Array.isArray(evolution) && evolution.length === 0 ? undefined : evolution 
    return evolution &&  (
        <ul>
          {
            this.chain(evolution)
          }
        </ul>
    );
  }
  
  public render() {
    return (
      <ul className="block evolutions list">
        { this.evolutions() }
      </ul>
    )
  }
}
