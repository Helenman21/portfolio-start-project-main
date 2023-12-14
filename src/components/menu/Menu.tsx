import React from "react";
import styled from "styled-components";
import { Button } from "../button/Button";

export const Menu = () => {
	return(
		<StayledMenu>
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">Projects</a></li>
					<Button text="Contact" href=""/>
				</ul>
		</StayledMenu>
	)
}

const StayledMenu = styled.nav`
	ul { 
		display: flex;
		gap: 30px;
	}
`