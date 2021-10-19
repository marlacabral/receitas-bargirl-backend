const mongoose = require('mongoose');
const DrinkServices = require('../services/drink.service');
const drinkService = new DrinkServices();

class DrinkController {

    getDrink = async (req, res) => {
        const drink = await drinkService.findAll();
        res.send(drink);
    }

    getDrinkById = async (req,res) => {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send('Invalid Id');
            return;
        }

        const drink = await drinkService.findById(id);
        if(!drink){
            res.status(400).send('Drink not finded');
            return;
        }
        res.status(200).send(drink);
    }

    createDrink = async (req,res) => {
        const drink = req.body;
        await drinkService.createDrink(drink)
        .then(() => {
            res.send({ message: 'Drink created with sucess.'});
        })
        .catch((err) => res.status(500).send({error: `Error in Server: ${err}`}));
    }

    updateDrink = async (req,res) => {
        const drink = req.body;
        const id = req.params.id;
        await drinkService.updateDrink(id, drink);
        let oldDrink = await drinkService.findById(id)
        .then(() => {
            res.status(200).send({ message: `Drink altered with sucess.`});
        })
        .catch((err) => res.status(500).send({error: `Error in Server: ${err}`}));
    }
    

    deleteDrink = async (req,res) => {
        const id = req.params.id;
        await drinkService.deleteDrink(id)
        .then(() => {
            res.status(200).send({ message: 'Drink exclused with sucess.'});
        })
        .catch((err) => res.status(500).send({error: `Error in Server: ${err}`}));
    }
}
    
    module.exports = DrinkController;