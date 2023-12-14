import React from "react";
import styled from "styled-components";

type TitlePropsType = {
	text: string
	align?: string
}

export const Title = (props: TitlePropsType) => {
	return(
		<StayledTitle >
				{props.text}
		</StayledTitle>
	)
}

const StayledTitle = styled.h3`
	color: ${ "#151717" };
	font-family: ${ "Montserrat" };
	font-size: ${ "24px" };
	font-weight: ${ "600" };
	line-height: ${ "26px" };
	letter-spacing: ${ "0.04em" };
`