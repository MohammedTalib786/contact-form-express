const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contact-form-28')
    .then(v => console.log('Connected'))
    .catch(e => console.log(e.message))
