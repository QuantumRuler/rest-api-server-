const express = require('express')
const app = express();

app.get('/',(req,res) =>{
   res.send('put /students for list all students');  
});
app.get('/students/', async (req,res) =>{
    let p = await fetch("https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API").then((response) =>{
        return response.json();
    }).then(data => {
        //console.log(data);
        return data;
    }).catch((err)  => {
        console.log('rejected',err);
    });
    p.sort(function(a,b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }
        if (b.name.toLowerCase() < a.name.toLowerCase()){
            return 1;
        }
        return 0;
    })
    res.send(p)
})
app.get('/students/:college', async (req,res) =>{
     let p = await fetch("https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API").then((response) =>{
        return response.json();
    }).then(data => {
        return data;
    }).catch((err)  => {
        console.log('rejected',err);
    });
    function format(roll,name,college){
        this.roll = roll;
        this.name = name;
        this.college = college;
    }

    students = new Array();
    p.forEach(item => {
        if(item["college"] == req.params.college){
            students.push(new format( item["roll no."],item["name"],item["college"]))
        }           
    });
    res.send(students)
  
    
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ....`));