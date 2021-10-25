const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const port = 5000

const handler = (req, res) =>{
    res.send("hello from bangladesh")
}

app.get('/', (req, res) =>{
res.send("Hello from my first node event")
})

const users =[
    {id:0, name:'sujan', email: "sujanmajumder@gmai.com", phone: "018282828282"},
    {id:1, name:'akbor', email: "Akbormumder@gmai.com", phone: "018282828282"},
    {id:2, name:'tanvir', email: "Tanvirmumder@gmai.com", phone: "018282828282"},
    {id:3, name:'Rakib', email: "Rakibmumder@gmai.com", phone: "018282828282"},
    {id:4, name:'sumon', email: "sumonmumder@gmai.com", phone: "018282828282"},
    {id:5, name:'sakib', email: "sakibmumder@gmai.com", phone: "018282828282"}
]

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
else{
    res.send(users)
}
}) 

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send("yummy Yummy tok marka fazli")
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id ;
    const user = users[id]
    res.send(user);
})
// app.method 
    // get 
    // post
    // put 
    // delete 
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser);

    console.log("hittinge the post", req.body)
    // res.send()
    res.json(newUser)

    
})
app.listen(port), () =>{
    console.log("listening to port", port);
}