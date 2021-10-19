const express = require('express');
const router = express.Router();
const DrinkController = require('./../controllers/drink.controller');

const drinkController = new DrinkController();

router.get('/', drinkController.getDrink);

router.get('/:id', drinkController.getDrinkById);

router.post('/add', drinkController.createDrink);

router.put('/update/:id', drinkController.updateDrink);

router.delete('/delete/:id', drinkController.deleteDrink);

module.exports = router;