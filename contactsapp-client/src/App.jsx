import React, { useContext, useEffect } from 'react';
import './App.scss';
import { ContactsList } from './components/contacts-list/contacts-list';
import { ContactConnections } from './components/contact-connections/contact-connections';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Login } from './components/login';
import { StateContext } from './context/state';

export const App = () => {

	const [{user, isLoading, childToParent}, dispatch] = useContext(StateContext);

	console.log(childToParent);

	useEffect(() => {
			axios.get('http://localhost:8081/me').then((res) => {
				dispatch({
					type: 'USER_RESPONSE',
					payload: res.data
				});
			});
	}, []);


	useEffect(() => {
		if (childToParent === 'Parent') {
			console.log('Parent is about to change state');
			dispatch({
				type: 'USER_RESPONSE',
				payload: 'Hey Child Again'
			})
		}
	}, [childToParent]);

	return (
		<>
				{
					isLoading ? <div>LOADING PAGE</div> :
						!!user ?
							<div>
								<ContactsList/>
								<Switch>
									<Route exact path={'/contact/:id'} render={() => <ContactConnections/>}/>
								</Switch>
							</div>
							:
							<Login/>
				}
		</>
	)
};
ºº	º111ºº