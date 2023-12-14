import styled from "styled-components";

type BlockTextPropsType = {
	text: string
}

export const BlockText = (props: BlockTextPropsType) => {
	return(
		<BlockWithTextStyled>{props.text}</BlockWithTextStyled>
	)
}


const BlockWithTextStyled = styled.p`
	font-family: Montserrat;
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0.04em;
	text-align: left;
	color: background: #1F2626;
`