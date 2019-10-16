import * as React from "react";
import * as PokeApiTypes from 'src/services/pokeapi.types';

import styled from "styled-components";
import { Panel } from 'src/components/styles/panel.component.style';

export const Evolution = styled.div`
	${Panel} {
		margin: 0px;
		h5 {
			margin: 0px;
		}
	}
`;
export const Filo = styled.ul`
	list-style: none;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 0px;
	margin: 0px;
`;
export const Specie = styled.li`
	margin: 0px;
	padding: 0px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	flex-direction: row;
	button {
		width: 100%;
		font-family: "Visitor";
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 8px;
		font-size: 14px;
		:hover {
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
`;
interface Props {
  evolutions?: PokeApiTypes.Chain;
  onChange: (e: any) => void;
}

export default class PokemonEvolutions extends React.Component<
  Props
  > {
  constructor(public props: Props) {
    super(props);
  }

  onChange = (e: any) => this.props.onChange(e.target.value);

  chain(evolution: PokeApiTypes.Chain | PokeApiTypes.Chain[]) {
    return Array.isArray(evolution) ? (
      evolution.map((e: PokeApiTypes.Chain, key: number) => {
        return (
          <Specie key={key}>
            <button onClick={this.onChange} value={e.species.name}>
              {e.species.name}
            </button>
            {!Array.isArray(e) &&
              Array.isArray(e.evolves_to) &&
              e.evolves_to.length > 0 &&
              this.evolutions(e.evolves_to)}
          </Specie>
        );
      })
    ) : (
        <Specie>
          <button onClick={this.onChange} value={evolution.species.name}>
            {evolution.species.name}
          </button>
          {!Array.isArray(evolution) &&
            Array.isArray(evolution.evolves_to) &&
            this.evolutions(evolution.evolves_to)}
        </Specie>
      );
  }

  evolutions(
    evolution?: PokeApiTypes.Chain | PokeApiTypes.Chain[]
  ): React.ReactElement | undefined {
    evolution = evolution || this.props.evolutions;
    evolution =
      Array.isArray(evolution) && evolution.length === 0
        ? undefined
        : evolution;
    return evolution && <Filo>{this.chain(evolution)}</Filo>;
  }

  render() {
    return (
      <Evolution>
        <h5>Evolution Chain</h5>
        <hr />
        <Panel theme='screen'>{this.evolutions()}</Panel>
      </Evolution>
    );
  }
}