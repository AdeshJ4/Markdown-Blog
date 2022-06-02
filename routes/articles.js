const express = require('express');
const router = express.Router();
const Article = require('../models/article');


router.get('/new', (req, res) => {
    res.render('articles/new');//http://localhost:5000/articles/new
});

// whenever we submit this form is going to call this router.post.
router.post('/', async(req, res)=>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.title
    });
    try{
        article = await article.save();     
        res.redirect(`/articles/${article.id}`)   
    }catch(err){
        res.render('articles/new', { article: article})
    }
});

module.exports = router;