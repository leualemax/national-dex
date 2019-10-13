export default interface IEvolution {
    evolves_to: IEvolution | IEvolution[];
    species: {
        name: string;
    }
}