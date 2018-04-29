var express = require('express');
var router = express.Router();
const models = require('../db/models');

router.get('/', function(req, res, next) {
    models.DB.findAll().then(function(topic) {
        res.render('tutor_page', {
           // title: 'Topic',
            topic_list: topic
        });
    });
});

module.exports = router;

