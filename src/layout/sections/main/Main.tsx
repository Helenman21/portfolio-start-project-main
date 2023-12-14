import { type } from "os";
import React from "react";
import styled from "styled-components";
//import { Icon } from "../icon/Icon";
import photo from '../../../assets/images/blogging.webp'
import { BlockText } from "../../../components/blockText/BlockText";
import { Button } from "../../../components/button/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/title/Title";

const text = {
	textDeveloper: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
	amet sint. Velit officia consequat duis enim velit mollit. Exercitatio
	n veniam consequat sunt.`,
	textAboutMe: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
	amet sint. Velit officia consequat duis enim velit mollit. Exercitatio
	n veniam consequat sunt.`
}

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper alignItems="center" justifyContent="spase-aroun" >
				<article>
					<MainTitle>DEVELOPER</MainTitle>
					<Name>ELENA MANKOVA</Name>
					<BlockText text={ text.textDeveloper }/>
					<Button text="Contact Me" />
				</article>
				<Photo src={ photo } alt=""/>
			</FlexWrapper>
			<article>
				
				<FlexWrapper direction="column">
					<Title text="About me" />
					<BlockText text={text.textAboutMe} />
				</FlexWrapper>
				
			</article>
		</StyledMain>
	)
}

const StyledMain = styled.div`
	min-height: 100vh;
	gap: 30px;
	background-color: #fff5e7;
	article{
		min-width: 520px;
		height: 278px;
	}
`

const Photo = styled.img`
	width: 533px;
	height: 399px;
	object-fit: cover;
`
const MainTitle = styled.h1`
	font-family: Tinos;
	font-size: 20px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0em;
	text-align: left;
`
const Name = styled.h2`
	font-family: Montserrat;
	font-size: 45px;
	line-height: 88px;
	letter-spacing: 0em;
	text-align: left;
`
