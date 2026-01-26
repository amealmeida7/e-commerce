const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagen: { 
        type: String, 
        default: 'https://dummyimage.com/200x200/000/fff' 
    }
});

// 👇 FORZAMOS colección correcta
module.exports = mongoose.model('Producto', productoSchema, 'productos');
