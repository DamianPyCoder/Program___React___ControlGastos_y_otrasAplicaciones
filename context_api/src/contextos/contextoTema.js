import React, {useState} from 'react';

// Creamos contexto = estado global.
const ContextoTema = React.createContext();

const ProovedorTema = ({children}) => {
	const [tema, cambiarTema] = useState(
		{
			alineado: 'center',
			fuente: 30
		}
	);

	const aumentarFuente = () => cambiarTema({...tema, fuente: tema.fuente + 1});
	const disminuirFuente = () => cambiarTema({...tema, fuente: tema.fuente - 1});

	const alinearIzquierda = () => cambiarTema({...tema, alineado: 'left'});
	const alinearCentro = () => cambiarTema({...tema, alineado: 'center'});
	const alinearDerecha = () => cambiarTema({...tema, alineado: 'right'});
	

	return(
		<ContextoTema.Provider
			value={
				{
					tema,
					aumentarFuente,
					disminuirFuente,
					alinearIzquierda,
					alinearCentro,
					alinearDerecha
				}
			}
			>
			{children}
		</ContextoTema.Provider>
	);
}
 
export {ContextoTema, ProovedorTema};