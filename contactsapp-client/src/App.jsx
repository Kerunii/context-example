import React, { useEffect } from 'react';
import './App.scss';
import { ContactsList } from './components/contacts-list/contacts-list';
import { ContactConnections } from './components/contact-connections/contact-connections';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/login';
import { useStateValue } from './context/state';
import { setChildToParentAction, setUserAction } from './context/actions';
import { getUser } from './api/core.api';


const PrivateRoutes = () => {
	return (
		<div>
			<ContactsList/>
			<Switch>
				<Route exact path={'/contact/:id'} render={() => <ContactConnections/>}/>
			</Switch>
		</div>
	)
};


const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>
			<Route exact path={'/login'} render={() => <Login/>}/>
		</Switch>
	)
};


export const App = () => {
	const [{user, isLoading, childToParent}, dispatch] = useStateValue();
	console.log(childToParent);

	useEffect(() => {
		getUser().then((res) => dispatch(setUserAction(res)));
	}, [dispatch]);

	useEffect(() => {
		if (childToParent === 'Parent') {
			console.log('Parent is about to change state');
			dispatch(setChildToParentAction('Hey Child Again'));
		}
	}, [childToParent, dispatch]);

	return (
		<>
			{
				isLoading ? <div>LOADING PAGE</div> :
					!!user ? <PrivateRoutes/> : <PublicRoutes/>
			}
		</>
	)
};
