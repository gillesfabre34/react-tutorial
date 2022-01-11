import { Product } from '../models/product';
import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../store/actions';

const ConnectedProductForm: React.FC<{createProduct: (product: Product) => any}> = ({createProduct}) => {

	const handleSubmit = (e) => {
		console.log("EVENT SBMT", e)
	}

	return <div className="row">
		<div className="col-md-4" />
	<div className="col-md-4">
		<form onSubmit={handleSubmit} style={{textAlign: "left"}} >
			<div className="form-group m-2">
				<label htmlFor="category" className="form-label ">Category</label>
				<input type='text' name="category" placeholder="Category" className="form-control" />
			</div>
			<div className="form-group m-2">
				<label htmlFor="category" className="form-label ">Name</label>
			<input type='text' name="name" placeholder="Name" className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary m-lg-2">Submit</button>
	</form>
	</div>
		</div>
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProduct: (product: Product) => dispatch(createProduct(product))
	}
}

export const ProductForm = connect(null, mapDispatchToProps)(ConnectedProductForm);
