import React, { useEffect } from 'react';
import { useStateValue } from '../../context/state';
import { setChildToParentAction } from '../../context/actions';


export const ContactConnections = () => {

	const [{childToParent}, dispatch] = useStateValue();


	const handleClick = () => {
		dispatch(setChildToParentAction('Parent'));
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