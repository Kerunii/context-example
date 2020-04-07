const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');



router.get('/me', async(req, res) => {
	res.send(await authService.getUser(req.cookies.username));
});


router.post('/login', async (req, res) => {
	const {username, password} = req.body;
	res.send(await authService.login(username, password));
});

module.exports = router;