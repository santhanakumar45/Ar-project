const express = require('express');
const app = express();
const cors = require('cors')
const jsonData = require("./ar.path")
const PORT = 3000;

// app.use(express.json())
app.use(cors())


// Without middleware
app.get('/google', (req, res) => {
    res.redirect('http://www.google.com');
});


app.get('/:QR', (req, res) => {
    const { QR } = req.params; // Extract the ID from request parameters
    console.log("ID received:", QR);

    const uri = jsonData[QR]; // Access the correct URL based on the ID
    console.log("Value:", QR);
    
    if (!uri) {
        return res.status(404).send('Model not found');
    }
    res.redirect(uri); // Redirect to the resolved URL
});


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

