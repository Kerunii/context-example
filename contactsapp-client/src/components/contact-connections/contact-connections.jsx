import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../context/state';


export const ContactConnections = () => {

	const [{childToParent}, dispatch] = useContext(StateContext);


	const handleClick = () => {
		dispatch({
			type: 'MODIFY_PARENT',
			payload: 'Parent'
		});
	};

	useEffect(() => {
		console.log('from child: ', childToParent);
	}, [childToParent]);

	return (
		<div>
			it also works
			<button onClick={handleClick}>CALL TO MY PARENT</button>
		</div>
	)
};