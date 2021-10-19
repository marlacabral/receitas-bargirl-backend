const Drink = require('./../models/drink');

class DrinkService {
    findAll = async () => await Drink.find();

    findById = async (id) => await Drink.findById(id);

    createDrink = async (drink) => await Drink.create(drink);

    updateDrink = async (id, drink) => await Drink.updateOne({ _id:id }, drink);

    deleteDrink = async (id) => await Drink.deleteOne({ _id:id });
}


module.exports = DrinkService;