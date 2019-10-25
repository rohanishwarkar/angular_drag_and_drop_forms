const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Form } = require('../models/form');

router.get('/', (req, res) => {
    Form.find((err, docs) => {
        console.log("Here");
        if (!err) { console.log(docs);res.send(docs); }
        else { console.log('Error in Retriving Forms :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Form.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Form :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var th = new Form({
        components: req.body.components,
        name: req.body.name
    });
    th.save((err, doc) => {
        if (!err) { res.send(doc);console.log(doc) }
        else { console.log('Error in Form Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var th = {
        name: req.body.name,
        components : req.body.components
    };
    Form.findByIdAndUpdate(req.params.id, { $set: th }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Form Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Form.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Form Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;