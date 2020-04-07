import React, { useEffect, useState } from 'react';
import './contacts-list.scss';
import { Link } from 'react-router-dom';
import { getContacts } from '../../api/contacts.api';


export const ContactsList = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts().then((res) => setContacts(res));
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