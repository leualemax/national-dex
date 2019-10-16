import React from "react";
import Pokemon from "./pokemon/index.component";
import "./app.component.scss";

import { Page } from "./styles/page.component.style";
import styled from "styled-components";
import { Provider } from 'react-redux';
import store from 'src/store';
import PokeFilters from './filter/index.components';

export const AppStyle = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
	position: absolute;
	top: 0px;
	left: 0px;
	justify-content: center;
	padding: 20px 0px;

	@media only screen and (max-width: 720px) {
		width: 200vw;
		padding: 0px;
	}

	${Page}:first-child {
		display: flex;
		flex-direction: column;
	}
`;

interface IAppState {
	type: string;
}

export default class App extends React.Component<any, IAppState> {
	render() {
		return (

			<Provider store={store}>
				<AppStyle>
					<Page direction='-' show={true}>
						<PokeFilters />
					</Page>
					<Page direction='+' show={false}>
						<Pokemon />
					</Page>
				</AppStyle>
			</Provider>
		);
	}
}
