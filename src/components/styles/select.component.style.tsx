import styled from "styled-components";

export const Select = styled.select`
	border: 2px solid #333;
	background-color: #32cb65;
	color: #20472d;
	padding: 8px;
	width: 100%;
	font-size: 14px;
	box-sizing: border-box;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font-family: "Visitor";
	cursor: pointer;
	&::-ms-expand {
		display: none;
	}
`;

export const Option = styled.option`
	font-family: "Visitor";
	color: #20472d;
`;
