const bodyParser = require('body-parser');
const creditCards = [];
const express = require('express');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());

// DB Config
app.use(cors());
app.post('/pay', (req, res) => {
    const creditCard = req.body;
    creditCards.push(creditCard);
    res.json(req.body);
});
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server started on ${port}`));