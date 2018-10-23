const cvr = require('./cvr-lookup');

var firma;

if (!process.argv[2]) {firma = "Erhvervsakademi Sjælland"} else {firma = process.argv[2];}

var firmaObj = cvr.returnByName(firma, (resultat) => {
   console.log(resultat); 
});

