import styled from "styled-components";

interface IPageProps {
	left?: string;
	show?: boolean;
	direction?: string;
}

export const Page = styled.div.attrs((props: IPageProps) => {
	return {
		...props,
		left: props.show ? "0px" : `${props.direction}100vw`
	};
})`
	width: 100%;
	min-width: 360px;
	max-width: 420px;
	height: 100%;
	overflow: hidden;
	padding: 4px;
	box-sizing: border-box;
	top: 0px;

	@media only screen and (max-width: 720px) {
		width: 100vw;
		max-width: 100vw;
		padding: 8vw;
	}
`;
