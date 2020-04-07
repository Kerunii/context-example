const contacts = require('../../contacts');

const getContacts = () => contacts.slice(0, 20);



module.exports = {
	getContacts
};

