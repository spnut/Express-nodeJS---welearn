var express = require('express');
var router = express.Router();
const models = require('../db/models');
var multer = require('multer')
var upload = multer({ dest: 'public/uploads' })
var path = require('path');
var http = require('http');


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




////////////////////`Examination part////////////////////
router.get('/examination', function(req, res, next) {
    models.DB_exam.findAll().then(function(topic) {
        res.render('examination_page', {
            topic_list: topic
        });
    });
});

/* Tutor Page (create post)[after click "create post" button in Tutor Page 
   you can input Topic and Detail*/
router.post('/examination/createPost', function(req, res, next) {
    res.render('create_post_exam');
});


/* Detail Page 
   you see Topic and Detail of Topic.ID*/
router.get('/examination/detail/:id', function(req, res, next) {
    var ID = req.params.id
    models.DB_exam.findById(ID).then(topic => { 
        models.Comment_exam.findAll({where: {topicID: ID }}).then(function(comment){
        res.render('detail_exam', {topic_list: topic, comment_list: comment});
    });
});
});


/* create data in models Topic(database*/


router.post('/examination/create', upload.any(),function(req, res, next) {
    //res.send(req.files)
  
    models.DB_exam.create({
        title: req.body.title_text,
        detail: req.body.detail_text,
        fileUpload: req.files[0].filename

    }).then(function() {
        res.redirect('/examination');
    });
});

/* download in examination board */
router.get('/downloadfile/:file',function(req, res, next) {
    var file_name = req.params.file
    //console.log(file_name)
    var fileLocation = path.join('public/uploads/',file_name);
    res.download(fileLocation, file_name);
    //res.download(".public/uploads/" + file_name, file_name)
    
});

/* create data in models Comment(database*/
router.post('/examination/detail/:id', function(req, res, next) {
    var ID = req.params.id
 
    models.Comment_exam.create({
        data: req.body.comment_text,
        topicID: ID
     }).then(function() {
        res.redirect('/examination');
    });
});

/* Delete topic and all comment in topic*/
router.post('/examination/deleteTopic/:id', function(req, res){
    var ID = req.params.id;
    models.DB_exam.destroy({
        where: {
            id : ID
        }
    }).then(delete_comment_too => {
        models.Comment_exam.destroy({where: {topicID : ID}})
    }).then(function(deleted){
            res.redirect('/examination');
    });
});

/* Delete a comment*/
router.post('/examination/deleteComment/:id', function(req, res){
    var ID = req.params.id;
    models.Comment_exam.destroy({
        where: {
            id : ID
        }
    }).then(function(deleted){
            res.redirect('/examination');
    });
});


module.exports = router;
