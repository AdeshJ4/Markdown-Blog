const express = require('express')
const app = express()
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');

mongoose
    .connect("mongodb://localhost/blog")
    .then(()=>console.log('Connected to DB'))
    .catch((err)=> console.log('Could not Connected to DB', err));

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
}]

app.get('/', (req, res)=> {
    res.render('articles/index', { articles: articles});
});

const port = 5000;
app.listen(port, ()=> {
    console.log(`port : ${port} server.js`);
});

app.use('/articles', articleRouter);