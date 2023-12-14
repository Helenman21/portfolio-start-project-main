import React from "react";
import styled from "styled-components";
import { BlockText } from "../../../../components/blockText/BlockText";
import { Button } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Title } from "../../../../components/title/Title";

type WorksPropsType = {
	textTitle: string
	listItem: Array<string>
	text: string
	src: string
}

export const Work = (props: WorksPropsType) => {
	return(
		<StyledWork>
			<Image src={props.src} alt="image" />
			<Title text={props.textTitle} />
			<ul>
				<FlexWrapper alignItems="start"  >
					{props.listItem.map((item: string) => {
						return <li key={item} >
									<Button text={item} />
								</li>
					}
					)}
				</FlexWrapper>
			</ul>
			<BlockText text={props.text} />
		</StyledWork>
	)
}

const StyledWork = styled.div`
	min-height: 100vh;
	background-color: #deefff;
	max-width: 540px;
	width: 100%;
	background-color: #ffe869;
	gap: 50px;
	ul{
		pading: 0px;
		background-color: #deefff;
		list-style: none;
		padding-inline-start: 0px;
	};
	padding: 15px;
`
const Image = styled.img`
	width:100%;
	height: 388px;
	object-fit: cover;
	height: 260px;
`