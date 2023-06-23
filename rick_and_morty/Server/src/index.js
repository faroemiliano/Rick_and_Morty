const http = require("http")
const {getCharById} = require ('./controllers/getCharById') 


http
.createServer ((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
   
    

})
.listen(3001, 'localhost')
     