const productModel = require('../models/product.model');
const fs = require('fs');

exports.createProduct = async (req, res) => {
	const { filename } = req.file;
	const {
		name,
		description,
		price,
		category,
		quantity,
	} = req.body;

	try {
        let product = await productModel.create({name, description, price: parseInt(price), category,fileName:filename, quantity : parseInt(quantity)});
		product = await product.save();

		res.json({
			successMessage: `${name} was created`,
			product,
		});
	} catch (err) {
		console.log('product.controller.create error', err);
		res.status(500).json({
			errorMessage: 'Veuillez reessayer',
		});
	}
};

exports.readAllProducts = async (req, res) => {
	try {
		const products = await productModel.find({}).populate(
			'category',
			'category'
		);

		res.json({ products });
	} catch (err) {
		console.log(err, 'readAllProducts error product.controller');
		res.status(500).json({
			errorMessage: 'Veuillez reessayer',
		});
	}
};

exports.readProduct = async (req, res) => {
	try {
		const idOfProduct = req.params.idOfProduct;
		const product = await productModel.findById(idOfProduct);

		res.json(product);
	} catch (err) {
		console.log(err, 'read error in productController');
		res.status(500).json({
			errorMessage: 'Veuillez reessayer',
		});
	}
};

