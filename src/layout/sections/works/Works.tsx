import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/title/Title";
import { Work } from "./work/Work";
import image from './../../../assets/images/image.webp';

const titleProject = ["Javascript", "PostgreSQL", "React", "redux"]
const insighitgram = ["Javascript", "React Native", "REdux"]
const textWorks = `The long barrow was built on land previously 
						inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, 
						estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen 
						megaliths on its eastern end. Both inhumed and cremated human remains were placed within 
						this chamber during the Neolithic period, representing at least nine or ten individuals.`
export const Works = () => {
	return(
		<StyledWorks>
			<Title text="Projects" />
			<FlexWrapper wrap="wrap" alignItems="center" margin="-15px" justifyContent="space-around" >
				<Work listItem={ titleProject } text={textWorks} src={ image } textTitle="TITLE PROJECT" />
				<Work listItem={ insighitgram } text={textWorks} src={ image } textTitle="I N S I G H T G R A M" />
				<Work listItem={ titleProject } text={textWorks} src={ image } textTitle="TITLE PROJECT" />
				<Work listItem={ insighitgram } text={textWorks} src={ image } textTitle="I N S I G H T G R A M"/>
			</FlexWrapper>
		</StyledWorks>
	)
}

const StyledWorks = styled.section`
	min-height: 100vh;
	background-color: #deefff;
	gap: 50px;
	min-widht: 1200px;
	margin: 0px auto;
`