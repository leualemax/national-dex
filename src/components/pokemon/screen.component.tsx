import styled from "styled-components";
import React from 'react';

export const Led = styled.div.attrs((props: any) => ({
  size: props.size || 6
}))`
	border: 2px solid #000000;
	box-shadow: inset -1px 2px #fff;
	background-color: #b42021;
	margin: 0px 6px;
	border-radius: ${props => props.size * 6}px;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`;

export const TopLedWrapper = styled.div`
	width: 100%;
	height: 12px;
	padding: 2px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const WoofWrapper = styled.div`
	width: 40px;
	height: 27px;
`;

export const Woof = styled.div`
	width: 34px;
	height: 4px;
	margin: 1px;
	border-radius: 20px;
	border: 2px solid #000000;
	box-shadow: inset -1px 2px #fff;
	background-color: #333;
`;

export const BaseWrapper = styled.div`
	width: 180px;
	min-height: 44px;
	display: flex;
	padding: 8px;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
`;

export const Wrapper = styled.div`
	box-shadow: inset -1px 2px #fff;
	width: 180px;
	height: 160px;
	overflow: hidden;
	border-radius: 5px 5px 5px 20px;
	border: 2px solid #000000;
	background-color: #cfc9c6;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Img = styled.img`
	width: 96px;
	height: 96px;
	background-color: #32cb65;
	border: 2px solid #000000;
`;

interface IPokemonScreen {
  src: string;
  alt: string;
}

export default class PokemonScreen extends React.Component<IPokemonScreen> {
  render() {
    return (
      <Wrapper>
        <TopLedWrapper>
          <Led />
          <Led />
        </TopLedWrapper>
        <Img {...this.props} />
        <BaseWrapper>
          <Led size={20} />
          <WoofWrapper>
            <Woof />
            <Woof />
            <Woof />
          </WoofWrapper>
        </BaseWrapper>
      </Wrapper>
    );
  }
}