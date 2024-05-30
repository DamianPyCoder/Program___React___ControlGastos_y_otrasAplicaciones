import React, {useContext} from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';
import {ContextoTema} from './contextos/contextoTema';

const App = () => {
	const {tema} = useContext(ContextoTema);

	return (
		<BrowserRouter>
			<ContenedorPrincipal>
				<Header />

				<Main tema={tema}>
					<Switch>
						<Route path="/" exact={true} component={Inicio} />
						<Route path="/blog" component={Blog} />
						<Route path="/post/:id" component={Post} />
						<Route path="/acerca-de" component={AcercaDe} />
						<Route component={Error404} />
					</Switch>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
}

const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
	font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
	text-align: ${props => props.tema ? props.tema.alineado : 'right'};
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
export default App;