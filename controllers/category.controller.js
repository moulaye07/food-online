const categoryModel = require('../models/category.model');

exports.createCategory = async (req, res) => {
	const { category } = req.body;

	try {
		const categoryInDatabase = await categoryModel.findOne({ category });
		if (categoryInDatabase) {
			return res.status(400).json({
				errorMessage: `${category} existe déjà`,
			});
		}

		let newCategory = await categoryModel.create({ category });
		newCategory = await newCategory.save();

		res.status(200).json({
			category: newCategory,
			successMessage: `${newCategory.category} est créée avec success!`,
		});
	} catch (err) {
		console.log('category create error: ', err);
		res.status(500).json({
			errorMessage: 'Veuillez reessayer',
		});
	}
};

exports.readAllCategory = async (req, res) => {
	try {
		const categories = await categoryModel.find({});
		res.status(200).json({categories});
	} catch (err) {
		console.log('readAllCategory error in category.controller: ', err);
		res.status(500).json({errorMessage: 'Veuillez reessayer'});
	}
};
