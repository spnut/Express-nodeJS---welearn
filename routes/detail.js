var express = require('express');
var router = express.Router();
const models = require('../db/models');

router.get('/:id', function(req, res, next) {
    var ID = req.params.id
    models.DB.findById(ID).then(topic => { 
        models.Comment.findAll({where: {topicID: ID }}).then(function(comment){
        res.render('detail', {topic_list: topic, comment_list: comment});
        //res.send(topic);
    });
});
});

module.exports = router;   
