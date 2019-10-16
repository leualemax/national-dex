import * as React from "react";

import * as PokeApiTypes from 'src/services/pokeapi.types';

import styled from "styled-components";
import { Panel } from 'src/components/styles/panel.component.style';;

export const Status = styled.div`
	${Panel} {
		flex-direction: row;
		padding: 10px 8px 20px 8px;
		h5 {
			margin: 14px 0px 4px 0px;
			font-size: 12px;
		}
	}
`;

export const Stat = styled.div`
	padding: 2px 4px;
	margin: 2px;
	display: block;
	i {
		float: right;
	}
`;

interface IPokemonStatsProps {
  stats: PokeApiTypes.Stat[];
  height: number;
  weight: number;
}
export default class PokemonStats extends React.Component<IPokemonStatsProps> {
  constructor(public props: IPokemonStatsProps) {
    super(props);
  }

  render() {
    return (
      <Status>
        <h5>Physics</h5>
        <hr />
        <Stat>
          height: <i>{this.props.height}</i>
        </Stat>
        <Stat>
          weight: <i>{this.props.weight}</i>
        </Stat>
        <h5>Stats</h5>
        <hr />
        {this.props.stats.map((element, key) => {
          return (
            <Stat key={key}>
              {element.stat.name}: <i>{element.base_stat}</i>
            </Stat>
          );
        })}
      </Status>
    );
  }
}