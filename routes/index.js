var express = require('express');
var router = express.Router();
const models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Tutor Page 
   you see create post button and all topic*/
router.post('/tutor', function(req, res, next) {
    models.DB.findAll().then(function(topic) {
        res.render('tutor_page', {
            topic_list: topic
        });
    });
});

/* Tutor Page (create post)[after click "create post" button in Tutor Page 
   you can input Topic and Detail*/
router.post('/tutor/createPost', function(req, res, next) {
    res.render('create_post');
});


/* Detail Page 
   you see Topic and Detail of Topic.ID*/
router.get('/tutor/detail/:id', function(req, res, next) {
    var ID = req.params.id
    models.DB.findById(ID).then(topic => { 
        models.Comment.findAll({where: {topicID: ID }}).then(function(comment){
        res.render('detail', {topic_list: topic, comment_list: comment});
        //res.send(topic);
    });
});
});
        /*  
    })
);
    var ID = req.params.id
    models.DB.findById(ID, models.Comment.findAll({ where: {topicID: ID }}, function()
        {

        }).then(function(topic) {
        res.render('detail', {
            topic_list: topic
        });
    });
});

/* create data in models Topic(database*/
router.post('/tutor/create', function(req, res, next) {
    models.DB.create({
        title: req.body.title_text,
        detail: req.body.detail_text,
    }).then(function() {
        res.redirect('/tutor');
    });

    //models.DB.create({
    //    title: req.body.title_text,
    //    detail: req.body.detail_text,
        /*comment: [
            { comment: req.body.detail_text}
        ]*/

    //}, {
    //    include: [{
    //        model: models.Comment,
    //        as: 'comment'
    //     }]
    //}).then(function() {
    //    res.redirect('/tutor');
    //});
});

router.post('/tutor/detail/:id', function(req, res, next) {
    var ID = req.params.id
    //models.DB.findById(ID).then({
    //    include: [{
    //        model: models.Comment,
    //        as: 'comment'
    //     }]
    //});
    models.Comment.create({
        data: req.body.comment_text,
        topicID: ID
     }).then(function() {
        res.redirect('/tutor');
    });
    /*models.DB.findById(ID)
    .then({include: [{
            model: models.Comment,
            as: 'comment'
         }]});

    models.Comment.create({
        comment: req.body.comment_text
    }).then(function() {
        res.redirect('/tutor');
    });*/
});

module.exports = router;
