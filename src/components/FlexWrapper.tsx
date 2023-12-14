import { type } from "os";
import styled from "styled-components";

type FlexWrapperPropsType = {
	direction?: string
	justifyContent?: string
	alignItems?: string
	wrap?: string
	gap?: string
	margin?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	margin: ${ props => props.margin || "0"  };;
	min-width: ${"100%"};
	display: ${"flex"};
	flex-direction: ${ props => props.direction || "row"  };
	justify-content: ${ props => props.justifyContent || "flex-start" };
	align-items: ${ props => props.alignItems || "stretch"};
	flex-wrap: ${ props => props.wrap || "nowrap"};
	gap: ${ props => props.gap || "0px"};
	box-sizing: border-box;
`