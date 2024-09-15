const express = require('express');
const uploadRoute = require('./routes/upload.routes');
const app = express();



app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* /api/upload */

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/api', uploadRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});