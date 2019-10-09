CVR-Lookup er et node modul, som kan bruges til at hente data fra CVR registret.

## Usage:

1. Installer og importer modulet

`const cvr = require('cvr-dummy');`

2. Kald modulets returnByName function. Param 1 er det firmanavn eller CVR nummer du vil søge på. Param 2 er en callback function, hvor du har adgang til resultatet som første paramater i callback (resultat)

`var firmaObj = cvr.returnByName(firma, (resultat) => {
   console.log(resultat); 
});`

