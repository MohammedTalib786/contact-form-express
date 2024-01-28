const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const path = require('path')
const User = require('./schema/users');
const router = require('./routes/router')

require('./database/db')

app.use('/users', router)


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!');
})




app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))

