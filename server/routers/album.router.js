var express = require('express');
var router = express.Router();
var Todo = require('../models/album.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/album', function(req, res) {
  //get from DB to router , mongoose gets this from model
  Todo.find({}, function(err, foundTodos){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      todos: foundTodos
    });
  });

});
router.get('/album/:id', function(req, res) {
  Todo.find({_id: req.params.id},  function(err,foundTodo){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      todo: foundTodo
    });
  });
});
router.post('/album', function(req, res) {

    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) {
            //  throw err;
            res.status(500).json({
                err: err
            });
        }
        res.status(201).json({
            msg: 'successfully created todo'
        });
    });
});
router.put('/album/:id', function(req, res) {
   Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldTodo){
     if(err){
       res.status(500).json({
         err: err
       });
     }
     res.status(200).json({
       msg: oldTodo
     });
   });
});
router.delete('/album/:id', function(req, res){
  Todo.findOneAndRemove({_id: req.params.id}, function(err, deleteTodo){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: deleteTodo
    });
  });
});
module.exports = router;
