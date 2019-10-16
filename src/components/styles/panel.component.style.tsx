import styled from "styled-components";

interface IPanelScreen {
	border?: string;
	theme?: string;
	color?: string;
	text?: string;
	shadow?: string;
	height?: string;
	hr?: any;
}

export const Panel = styled.div.attrs((props: IPanelScreen) => {
	return props.theme === "screen"
		? {
			border: props.border || "5px",
			color: "#32cb65",
			shadow: "inset 0px 0px 0px 2px rgba(0,0,0,0.2)",
			text: "#20472d",
			height: props.height || "100%",
			hr: {
				top: "1px solid #333",
				bottom: "1px solid #196b34"
			}
		}
		: {
			border: props.border || "5px",
			color: "#cfc9c6",
			text: "inherit",
			height: props.height || "100%",
			shadow: "inset -1px 2px rgba(255, 255, 255, 0.6)",
			hr: {
				top: "1px solid #333",
				bottom: "1px solid #888"
			}
		};
})`
	box-shadow: ${props => props.shadow};
	border-radius: ${props => props.border};
	border: 2px solid #333;
	padding: 8px;
	height: ${props => props.height};
	width: 100%;
	color: ${props => props.text};
	box-sizing: border-box;
	background-color: ${props => props.color};
	hr {
		border-top: ${props => props.hr.top};
		border-bottom: ${props => props.hr.bottom};
	}
	h5:first-child{
		margin: 0px;
		margin-top: 4px;
	}
	h5{
		margin: 0px;
		margin-top: 20px;
	}
`;

export const Scroll = styled.div`
	overflow-y: auto;
	height: 100%;
	::-webkit-scrollbar {
		width: 8px;
		background-color: transparent;
		margin-right: 20px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		-webkit-box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3);
		box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3);
		background-color: #333;
	}
`;
