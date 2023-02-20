const express = require ("express");
const path = require ('path');

const app = express();

app.use(express.static(__dirname + '/dist/front_end_bdd_real_estate'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/front_end_bdd_real_estate/index.html'));
})

app.listen(process.env.PORT);