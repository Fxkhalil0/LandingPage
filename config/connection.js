const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI ,'mongodb+srv://lvw:LVW123456789@cluster0.9bdwe65.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});