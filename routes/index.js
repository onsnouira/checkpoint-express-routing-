const express = require('express');
const router = express.Router();

/* GET home page and render index.pug */
router.get('/', (req, res) => {
    res.render('index');

    
});
/* GET service page */
router.get('/Services', (req, res) => {
    res.render('service');
});
/* GET contact page */
router.get('/Contact', (req, res) => {
    res.render('contact');
});
/* GET any page */
router.get('*', (req,res) =>{
    res.render('error');
})


module.exports = router;

