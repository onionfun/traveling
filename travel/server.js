const express= require('express');
const app = express();
const controller = require("./controller/controller");
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use("/repo", controller);
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
 
    res.render('index.ejs')
    
})

const port ="3000"
app.listen(port, () => {
    console.log("app listeninggggggggg");
})