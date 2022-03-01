const express = require('express')
const moment = require('moment')
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

//'/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
 })

//'/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10' 
/**en caso de que alguien visite la ruta '/visitas', aumenta la vble visitas en 1. Y muestra la cantidad de visitas  */
let visitas = 0
app.get('/visitas', (request,response) => {
    visitas++
    response.send(`La cantidad de visitas es ${visitas}`)
})
/* '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
{ fyh: '11/1/2021 11:36:04' }*/
app.get('/fyh', (request, response) => {
    response.send({fyh: moment().format('YYYY/MM/DD HH:mm:ss')})
})