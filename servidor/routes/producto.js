//Rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/generar-pdf', productoController.generarPDF);
router.get('/:id', productoController.verProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;