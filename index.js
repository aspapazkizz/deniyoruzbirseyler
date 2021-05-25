const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');




app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname,"naber.html"));
 
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})