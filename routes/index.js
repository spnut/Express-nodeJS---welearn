var express = require('express');
var router = express.Router();
const models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Tutor Page 
   you see create post button and all topic*/
router.get('/tutor', function(req, res, next) {
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
});

/* create data in models Comment(database*/
router.post('/tutor/detail/:id', function(req, res, next) {
    var ID = req.params.id
 
    models.Comment.create({
        data: req.body.comment_text,
        topicID: ID
     }).then(function() {
        res.redirect('/tutor');
    });
});

/* Delete topic and all comment in topic*/
router.post('/tutor/deleteTopic/:id', function(req, res){
    var ID = req.params.id;
    models.DB.destroy({
        where: {
            id : ID
        }
    }).then(delete_comment_too => {
        models.Comment.destroy({where: {topicID : ID}})
    }).then(function(deleted){
            res.redirect('/tutor');
    });
});

/* Delete a comment*/
router.post('/tutor/deleteComment/:id', function(req, res){
    var ID = req.params.id;
    models.Comment.destroy({
        where: {
            id : ID
        }
    }).then(function(deleted){
            res.redirect('/tutor');
    });
});

module.exports = router;
