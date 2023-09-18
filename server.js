const express = require('express');
const axios = require('axios').default;
const client = require('./client');

const app = express();

app.get('/', async(req,res) =>{
const cachVal = await client.get('todos');
if (cachVal) return res.json(JSON.parse(cachVal))
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('todos',JSON.stringify(data));
    client.expire('todos',30)
    return res.json(data);
})
app.listen(9000);