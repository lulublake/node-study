const express = require ('express');
const uuid = require ('uuid');
const members = require('../members');
const route = express.Router();


// Read all members
route.get('/all_members', (req,res) => {
    let msg  = "Success";
    let count = members.length;
    if (count === 0)
        msg = "There are no members";
    res.status(200).send({msg, count, members});
});

//Add a member
route.post('/add', (req, res) => {
    const {name, occupation, age} = req.body;

    if(!name || !occupation || !age)
        return res.status(400).send({'status': 'error', msg: "All fields must be entered"});

    const count = members.push({
        id: uuid.v1(),
        name,
        occupation,
        age,
        isOnline: false
    });

    res.status(200).send({status: 'ok', msg: "Success", count, members});
});

//Update a member
route.put('/edit', (req, res) => {
    const {name, occupation, age, isOnline, id} = req.body;

    if(!id)
        return res.status(400).send({status: 'error', msg: 'Please enter id'});

    let index = -1;
    const found = members.some((member) => {
        index++;
        return member.id === id;
    });
    
    if(!found)
        return res.status(400).send({status: 'error', msg: `No user with id ${id} exists`});

    const [member] = members.filter((member) => {
        return member.id === id;
    });

    member.name = name? name : member.name;
    member.age = age? age : member.age;
    member.occupation = occupation? occupation : member.occupation;
    member.isOnline = isOnline? isOnline : member.isOnline;

    members[index] = member;

    return res.status(200).send({status: 'ok', msg: 'Successful update', members});
});

route.delete('/delete', (req, res) => {
    const {id} = req.body;

    if(!id)
        return res.status(400).send({status: 'error', msg: "Please enter id"});

    let index = -1;
    const found = members.some((member) => {
        index++;
        return member.id === id;
    })

    if (!found)
        return res.status(404).send({status: 'error', msg: `No user with id ${id} exists`});

    members.splice(index, 1);
    return res.status(200).send({status: 'ok', msg: 'successful delete', members});
});

route.post('/single_member', (req, res) => {
    const {id} = req.body;

    if (!id)
        return res.status(400).send({status: 'error', msg: 'please enter id'});

    const nMembers = members.filter((member) => member.id === id);

    if(nMembers.length === 0)
        return res.status(404).send({status: 'error', msg: 'Success', member: nMembers[0]});
});

module.exports = route;