const express = require('express');
const router = express.Router();
const repository = require('../repositories/contacts.repository');

//Aquí declararemos nuestras rutas

//Le pongo asyn await porque tengo que esperar a que la DB me de una repsuesta.
router.get('/', async (req, res) => {
	res.send(await repository.getContacts());
});









module.exports = router;
