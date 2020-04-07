const authRepository = require('../repositories/auth.repository');


const getUser = (username) => {
	const user = authRepository.userFindByUsername(username);
	return {username: 'aasdfadf'};
	// return !!user ? user : null;
};

const login = (username, password) => {
	const user = authRepository.userFindByUsername(username);
	if (!user) {
		throw new Error('User does not exist');
	}
	if (user.password !== password) {
		throw new Error('Incorrect password');
	}
	return user;
};

module.exports = {
	getUser,
	login
};
