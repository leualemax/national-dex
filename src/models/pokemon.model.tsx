import IEvolution from "./evolution.model";
import IPokemonMove from "./pokemon.move.model";
import IPokemonStat from "./pokemon.stat.model";
import IPokemonType from "./pokemon.type.model";

export default interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  species?: {
    url: string;
    flavor_text_entries: any;
  };
  evolutions?: IEvolution;
  description?: string;
  moves: IPokemonMove[];
  types: IPokemonType[];
  stats: IPokemonStat[];
}
