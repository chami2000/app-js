const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const currentUTC = new Date()
        .toISOString()
        .replace('T', ' ')
        .split('.')[0];
    
    res.send(`Hello World<br>Current UTC Time: ${currentUTC}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
