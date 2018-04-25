var express = require('express');
var router = express.Router();
const models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/tutor', function(req, res, next) {
    //models.Topic.findAll().then(function(topic) {
    models.Topic.findAll().then(function(topic) {
        res.render('tutor_page', {
           // title: 'Topic',
            topic_list: topic
        });
    });
});

router.post('/tutor/createPost', function(req, res, next) {
    res.render('create_post');
});

router.get('/tutor/detail/:id', function(req, res, next) {
    var ID = req.params.id
    models.Topic.findById(ID).then(function(topic) {
        res.render('detail', {
            topic_list: topic
        });
    });
});

router.post('/tutor/create', function(req, res, next) {
    models.Topic.create({
        title: req.body.title_text,
        detail: req.body.detail_text
    }).then(function() {
        res.redirect('/tutor');
    });
});

module.exports = router;
