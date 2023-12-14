import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Works } from './layout/sections/works/Works';



function App() {
    return (
		  <AppStyled>
			<Header/>
					<Main/>
					<Works />		
		  </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
	background-color: #fff5e7;
`
const Wrapper = styled.div`
    font-size: 1.5em;
    text-align: center;
	 width: 100vh;
	 margin: 0px auto;
`;