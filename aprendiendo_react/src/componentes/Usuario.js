import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Usuario = () => {
	const pais = null;
	const amigos = ['Alejandro', 'Manuel', 'Cesar'];

	return(
	  <div>
		<Titulo usuario="Carlos" />
		<Titulo usuario="Cesar" color="blue"/>
		<Parrafo>Tu lista de amigos es:</Parrafo>
		{pais && <p>Tu eres de: {pais}</p>}
		<ul>
		  {amigos.map((amigo, index) => <li key={index}>{amigo}</li> )}
		</ul>
		<Parrafo>Que tengas un buen dia.</Parrafo>
	  </div>
	);
};

const Parrafo = styled.p`
	margin: 20px 0;
`;

export default Usuario;