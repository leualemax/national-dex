
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: BaseObject[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: BaseObject;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface List {
  count: number;
  next: string;
  previous: null;
  results: BaseObject[];
}

export interface Ability {
  ability: BaseObject;
  is_hidden: boolean;
  slot: number;
}

export interface BaseObject {
  id: number;
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: BaseObject;
}

export interface HeldItem {
  item: BaseObject;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: BaseObject;
}

export interface Move {
  move: BaseObject;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BaseObject;
  version_group: BaseObject;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: BaseObject;
}

export interface Type {
  slot: number;
  type: BaseObject;
}


export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: BaseObject;
  egg_groups: BaseObject[];
  evolution_chain: EvolutionChain;
  evolves_from_species: BaseObject;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: BaseObject;
  growth_rate: BaseObject;
  habitat: BaseObject;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: BaseObject;
  varieties: Variety[];
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: BaseObject;
  version: BaseObject;
}

export interface Genus {
  genus: string;
  language: BaseObject;
}

export interface Name {
  language: BaseObject;
  name: string;
}

export interface PalParkEncounter {
  area: BaseObject;
  base_score: number;
  rate: number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: BaseObject;
}

export interface Variety {
  is_default: boolean;
  pokemon: BaseObject;
}

export interface Evolution {
  baby_trigger_item: null;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: BaseObject;
}

export interface EvolutionDetail {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: BaseObject;
  turn_upside_down: boolean;
}





