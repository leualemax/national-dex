import * as React from 'react';
import IEvolution from 'src/models/evolution.model';

interface IPokemonEvolutionsProps {
  evolutions?: IEvolution
}

export default class PokemonEvolutions extends React.Component<IPokemonEvolutionsProps>  {  
  constructor(public props: IPokemonEvolutionsProps) {
    super(props);
  }

  public chain(evolution:IEvolution | IEvolution[])  {
    return Array.isArray(evolution) ? evolution.map((e:IEvolution, key:number) => {
        return (<li key={key}>
          {e.species.name}
          {
            !Array.isArray(e) && Array.isArray(e.evolves_to) && e.evolves_to.length > 0 &&
            this.evolutions(e.evolves_to)
          }
        </li>)
      }) : <li>{evolution.species.name}</li>
  }

  public evolutions(evolution?: IEvolution | IEvolution[]): React.ReactElement | undefined {
    evolution = evolution || this.props.evolutions;
    evolution = Array.isArray(evolution) && evolution.length === 0 ? undefined : evolution 
    return evolution &&  (
        <ul>
          {
            this.chain(evolution)
          }
          {
            !Array.isArray(evolution) && Array.isArray(evolution.evolves_to) &&
            this.evolutions(evolution.evolves_to)
          }
        </ul>
    );
  }
  
  public render() {
    return (
      <div className="block evolutions">
        { this.evolutions() }
      </div>
    )
  }
}
