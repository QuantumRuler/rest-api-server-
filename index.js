const express = require('express')
const app = express();

app.get('/',(req,res) =>{
   res.send('hello world');  
});

app.get('/api/courses',(rep,res) => {
    res.send([1,2,3,4]);
});

app.get('/api/courses/:id',(req,res) =>{
    res.send(`You sent id ${req.params.id}`)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ....`));