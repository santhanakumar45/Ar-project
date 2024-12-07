const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000;

app.use(express.json())
app.use(cors())



// Without middleware
app.get('/google', (req, res) => {
    res.redirect('http://www.google.com');
});


app.get('/ar/view/:path', (req, res) => {
    console.log(req.params)
    const { path } = req.params;
    console.log(path)
    res.redirect(`https://biztel.co.in/${path}`);
});



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

