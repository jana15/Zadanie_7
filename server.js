const path = require('path');
console.log(path);
const express = require ('express'); 
const app = express();
const port = 4000;//volný port

//const pathToHtml = path.join(__dirname, './page/Zabcikova_Z6.html'); 

const pathToStaticFiles = path.join(__dirname, 'page');
console.log(pathToStaticFiles);
app.use(express.static(pathToStaticFiles));
const indexHTML = path.join(__dirname, 'page', 'Zabcikova_Z6.html')// cesta k html
app.get('/', function(req, res){
    res.sendFile(indexHTML);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
