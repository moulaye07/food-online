const productModel = require('../models/product.model');
const fs = require('fs');

exports.createProduct = async (req, res) => {
	const {
		name,
		description,
		price,
		category,
		quantity,
	} = req.body;

	try {
        let product = await productModel.create({name, description, price: parseInt(price), category, quantity : parseInt(quantity)});
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