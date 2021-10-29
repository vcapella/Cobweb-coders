const path = require('path');
const express = require('express');
const handlebar = require('express-handlebars');
const route = require('./controller');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = handlebar.create({ 
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(route);


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
});