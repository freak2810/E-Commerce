const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Here is a list of Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello Default Route</h1>');
});

// app.use((req, res, next) => {
//     console.log('In the 1st middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In the 2nd middleware');
// });

app.listen(3000);