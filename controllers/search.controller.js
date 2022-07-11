const productModel = require('../models/product.model');

exports.searchByQuery = async (req, res) => {
	const { type, query } = req.body;

	try {
		let products;

		switch (type) {
			case 'text':
				products = await productModel.find({ $text: { $search: query } });
				break;
			case 'category':
				products = await productModel.find({ category: query });
				break;
		}

		if (!products.length > 0) {
			products = await productModel.find({});
		}

		res.json({ products });
	} catch (err) {
		console.log(err, 'search error in Controller.searchByQuery');
		res.status(500).json({
			errorMessage: 'Veuillez reessayer',
		});
	}
};
