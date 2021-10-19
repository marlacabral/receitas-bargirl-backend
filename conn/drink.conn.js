const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb+srv://dbUser:mn70d6Zny2BkFgaa@drinks.o0t4w.mongodb.net/drinks?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error at mongo', err))
}

module.exports = Conn;