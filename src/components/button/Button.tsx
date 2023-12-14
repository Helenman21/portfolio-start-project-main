import { type } from "os";
import React from "react";
import styled from "styled-components";

type ButtonStyledPropsType = {
	width?: string
	height?: string
	radius?: string
	padding?: string
}

type ButtonPropsType = {
	text: string
	link?: boolean
	href?: string
}

export const Button = (props: ButtonPropsType) => {
	return(
		<StayledButton>
			{props.text}	
		</StayledButton>
	)
}

const StayledButton = styled.a<ButtonStyledPropsType>`
	width: ${ props => props.width || "134px"  };
	height: ${ props => props.height || "45px"  };
	border-radius: ${ props => props.radius || "6px" };
	line-height: ${ "45px" };
	border: ${"1px solid #5222D0"};
	background-color: ${"#5222D0"};
	color: ${"#DBFFFF"};
	text-align: ${"center"};
	padding: 3px;
	}
`