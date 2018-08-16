const express = require('express')
const app = express()
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});