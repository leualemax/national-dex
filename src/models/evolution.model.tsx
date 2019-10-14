export default interface IEvolution {
  evolves_to: IEvolution | IEvolution[];
  species: {
    url: string;
    name: string;
  };
}
