import React, {useState, useEffect} from 'react';
import styles from './ContadorFuncional.module.css';
import Boton from './../elementos/Boton';

const ContadorFuncional = (props) => {
	const [cuenta, cambiarCuenta] = useState(0);

	// componentDidMount y componentDidUpdate
	// Este hook se ejecuta cada ciclo de renderizado
	// useEffect(() => {
	// 	console.log('El componente se renderizo');
	// });

	// componentDidMount.
	// Se ejecuta solamente al primer renderizado.
	useEffect(() => {
		console.log('El componente cargo por primera vez')
		// Conectar a una API
	}, []);

	// Se ejecuta cuando cambia el estado de 
	// la dependencia que le pasemos, en este caso 'contador'
	// useEffect(() => {
	// 	console.log('El estado del contador cambio')
	// }, [cuenta]);

	useEffect(() => {
		// Codigo del efecto

		return(() => {
			console.log('Adios componente!');
			// Cerramos conexion a la API
		});
	}, []);

	const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad)
	const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)

	return (
		<div>
			<h1>Contador: {cuenta}</h1>
			{/* <button className={styles.boton} onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</button> */}
			{/* <button className={styles.boton} onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</button> */}
			<Boton 
				negro 
				marginRight 
				onClick={() => incrementar(props.cantidadAIncrementar)}
			>
				Incrementar
			</Boton>
			<Boton 
				negro 
				onClick={() => disminuir(props.cantidadADisminuir)}
			>
				Disminuir
			</Boton>
		</div>
	);
}
 
export default ContadorFuncional;