import IPokemonAbility from './pokemon.ability.model';
import IPokemonStat from './pokemon.stat.model';
import IPokemonType from './pokemon.type.model';

export default interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    },
    abilities: IPokemonAbility[],
    types: IPokemonType[],
    stats: IPokemonStat[]
}
