import * as React from "react";

import * as PokeApiTypes from 'src/services/pokeapi.types';

import styled from "styled-components";
import { Panel } from 'src/components/styles/panel.component.style';
import { Select, Option } from 'src/components/styles/select.component.style';

export const Moves = styled.div`
	${Panel} {
		flex-direction: row;
		margin: 8px 0px;
		padding: 8px;
		h5 {
			margin: 0px;
		}
		p {
			padding: 8px;
			font-size: 16px;
		}
	}
`;

interface Props {
  moves: PokeApiTypes.Move[];
  selected?: string;
  effect?: string;
  onChange: (e?: string) => void;
}

export default class PokemonMoves extends React.Component<Props> {
  constructor(public props: Props) {
    super(props);
  }

  loadMove = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      event.target.value !== "select" ? event.target.value : undefined;
    this.props.onChange(value);
  };

  render() {
    return (
      <Moves>
        <h5>Moves</h5>
        <hr />
        <Select onChange={this.loadMove} value={this.props.selected}>
          <Option value='select'>Select Move</Option>
          {this.props.moves.map((element, key) => {
            return (
              <Option key={key} value={element.move.url}>
                {element.move.name}
              </Option>
            );
          })}
        </Select>
        <Panel theme='screen'>
          {this.props.effect || "Please, select a move!"}
        </Panel>
      </Moves>
    );
  }
}
