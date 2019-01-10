const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

console.log('starting on port 3000');
app.listen(3000);
