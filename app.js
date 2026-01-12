//1. importar la libreria para crear aplicaciones web 
const express = require ('express');

//2. Crear una instancia de express (aplicacion principal)
const app = express();

//3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

//------Configuración-------
//Establecer EJS como motor de plantillas 
app.set('view engine', 'ejs')

//Establecer la carpeta pública con elementos estátios 
app.use(express.static('public'));


//4. Crear la primera "ruta" cuando el usuario ingrese a la raiz de nuestra app 
app.get ('/', (req, res) =>{
    res.send('<h1>Servidor de E-commerce Iniciado </h1><p>NPM y Express funcionando...!<p/>')
})

//5. Encender el servidor 
app.listen(PORT, ()=> {
    console.log (`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});