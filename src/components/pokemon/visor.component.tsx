import React from "react";
import styled from "styled-components";
import { Panel } from 'src/components/styles/panel.component.style';

import PokemonScreen from "./screen.component";

interface Props {
	src?: string;
	name?: string;
	description?: string;
}

export const Visor = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	flex-direction: row;
	${Panel}:first-child {
		width: 100%;
		height: 34px;
		margin-bottom: 4px;
	}
	${Panel}:not(:first-child) {
		flex: 1;
		margin-left: 4px;
		height: 164px;
		font-size: 14px;
		overflow: hidden;
		text-overflow: clip;
	}
`;

export const H3 = styled.div`
	margin: 0px;
	text-align: center;
`;

export default class PokemonVisor extends React.Component<Props> {
	render() {
		return (
			<Visor>
				<Panel>
					<H3>{this.props.name}</H3>
				</Panel>
				<PokemonScreen src={this.props.src || ''} alt={this.props.name || ''} />
				<Panel>{this.props.description}</Panel>
			</Visor>
		);
	}
}