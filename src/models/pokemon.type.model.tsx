import IAbility from './ability.model';

export default interface IPokemonType {
    ability: IAbility;
    is_hidden: boolean
    slot: number
}