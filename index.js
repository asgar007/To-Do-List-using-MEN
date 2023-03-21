const express = require('express');
const port = 7000;
const app = express();

app.listen(port, function(err){
    if(err){ console.log(`Error : ${err}`); }
    console.log(`server successfully started on ${port}`);
});