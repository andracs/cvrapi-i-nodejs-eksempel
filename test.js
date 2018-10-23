const cvr = require('./cvr-lookup');

var firma = "Socialstyrelsen";

if (process.argv[2]!="") firma = process.argv[2];

var firmaObj = cvr.returnByName(firma, (resultat) => {
   console.log(resultat); 
});

