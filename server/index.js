const express = require('express')
 
// crear el servidor/app de express
const app = express();
 
// get; lo pruebo en localhost:4000
app.get('/', (req,res) => {
   console.log('petición al slash');
   res.status(200).json({
       ok:true,
       msg:'Todo ok',
       udi:1234
   })
})
 
 
//
app.listen(4000, () => {
   console.log(`Escuchando en el puerto ${4000}`)
})
