const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
	{
        name: {
			type: 'String',
			required: true,
			trim: true,
			maxlength: 30,
		},
        price: {
			type: Number,
			required: true,
		},
        description: {
			type: 'String',
			trim: true,
		},
		category: {
			type: ObjectId,
			ref: 'category',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

productSchema.index({ name: 'text' });
const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
