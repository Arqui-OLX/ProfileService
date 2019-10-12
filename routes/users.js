var express = require('express');
var router = express.Router();
const dbConn = require('../database/db')


/* GET users listing. */
router.get('/', function(req, res, next) {
  dbConn.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    var jsonString = JSON.stringify(results, ["email", "nick","location","cellphone"]);
    return res.send({ error: false, data: JSON.parse(jsonString), message: 'users list.' });
  });
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  let user = req.body;
  dbConn.query('INSERT INTO user SET ?', user, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send({ error: false, data: results, message: user });
  });
});

/* GET:id. */
router.get('/:id', function(req, res, next) {
  dbConn.query('SELECT * FROM user where id = ?',req.params.id, function (error, results, fields) {
    if (error) throw error;
    var jsonString = JSON.stringify(results, ["email", "nick","location","cellphone"]);
    return res.send({ error: false, data: JSON.parse(jsonString), message: 'User' });
  });
});

/* UPDATE:id  (Passing whole user ) */
router.put('/:id', function(req, res, next) {
  let user = req.body;
  let id = req.params.id
  dbConn.query('UPDATE user SET ? where id = ?',[user , id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'User updated' });
  });
});

/* DELETE:id. */
router.delete('/:id', function(req, res, next) {
  dbConn.query('DELETE FROM user where id = ?',req.params.id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'User deleted.' });
  });
});

module.exports = router;
