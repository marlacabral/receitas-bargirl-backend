const mongoose = require('mongoose');

const DrinkModel = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    deadline: { type: Number, required: true },
    status: { type: String, required: true },
    criationDate: { type: Date, default: Date.now()},
});

const Drink = mongoose.model("schdrink", DrinkModel);

module.exports = Drink;