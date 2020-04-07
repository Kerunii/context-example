const users = [
	{
		username: 'test',
		password: 'test',
		id: 1
	},
	{
		username: 'test2',
		password: 'test2',
		id: 2
	}
];


const userFindByUsername = (username) => {
	return users.find((e) => e.username === username);
};


module.exports = {
	userFindByUsername
};