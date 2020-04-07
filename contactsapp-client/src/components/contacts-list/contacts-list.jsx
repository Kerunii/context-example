import React, { useEffect, useState } from 'react';
import './contacts-list.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/state';


export const ContactsList = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8081/contacts')
			.then((res) => setContacts(res.data));
	}, []);

	return (
		<div>
			{
				contacts.map((e) =>
					<Link key={e.id} to={`/contact/${e.id}`}>{e.name}</Link>
				)
			}
		</div>
	)
};