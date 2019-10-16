import * as React from "react";

import * as PokeApiTypes from 'src/services/pokeapi.types';

import styled from "styled-components";
import { Panel } from 'src/components/styles/panel.component.style';;

export const Types = styled.div`
	margin: 4px 0px;
	${Panel} {
		flex-direction: column;
	}
`;

export const Type = styled.button`
	background-color: rgb(150, 151, 140);
	border-radius: 3px;
	padding: 2px 4px;
	margin: 2px;
	cursor: pointer;
	&:hover {
		background-color: rgb(100, 100, 100);
	}
`;
interface Props {
  types: PokeApiTypes.Type[];
  onChange: (e: any) => void;
}

export default class PokemonType extends React.Component<Props> {
  constructor(public props: Props) {
    super(props);
  }

  render() {
    return (
      <Types>
        <Panel>
          {this.props.types.map((element, key) => {
            return (
              <Type
                key={key}
                onClick={this.props.onChange}
                className='type'
                value={element.type.name}>
                {element.type.name}
              </Type>
            );
          })}
        </Panel>
      </Types>
    );
  }
}