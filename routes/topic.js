var express = require('express');
var router = express.Router();
const models = require('../db/models');

router.get('/', function(req, res, next) {
    models.Topic.findAll().then(function(topic) {
        res.render('topic_page', {
            title: 'Topic',
            topic_list: topic
        });
    });
});

router.post('/create', function(req, res, next) {
    models.Topic.create({
        title: req.body.title_text,
        detail: req.body.detail_text
    }).then(function() {
        res.redirect('/topic');
    });
});

module.exports = router;   
