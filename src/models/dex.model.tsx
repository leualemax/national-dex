import IPokemon from "./pokemon.model";

export default interface IDex {
    selected: IPokemon;
    list: Array<{
        name: string,
        url: string
    }>,
    cachedList?: Array<{
        name: string,
        url: string
    }>,
    types?: Array<{
        name: string,
        url: string
    }>,
    showShortEffect?: string;
};
  