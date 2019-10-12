import IAbility from './ability.model';

export default interface IPokemonAbility {
    ability: IAbility;
    is_hidden: boolean
    slot: number
}