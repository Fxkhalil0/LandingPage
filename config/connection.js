const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lvw:LVW123456789@cluster0.9bdwe65.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});