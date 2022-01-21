import React, { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createProduct } from '../store/slices/productsSlice';
import { Product } from '../models/product';

type ProductFormProps = ConnectedProps<typeof connector>;

const ConnectedProductForm: React.FC<ProductFormProps> = ({createProduct}: ProductFormProps) => {

	const [product, setProduct]: [Product, Dispatch<SetStateAction<Product>>] = useState<Product>({category: '', name: '', stocked: true, price: '0'});

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setProduct({...product, [e.target.name]: e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		createProduct(product);
	}

	return <div className="row">
		<div className="col-md-4" />
		<div className="col-md-4">
			<form onSubmit={handleSubmit} style={{textAlign: "left"}} >
				<div className="form-group m-2">
					<label htmlFor="category" className="form-label ">Category</label>
					<input type='text' name="category" placeholder="Category" className="form-control" onChange={handleChange} />
				</div>
				<div className="form-group m-2">
					<label htmlFor="category" className="form-label ">Name</label>
					<input type='text' name="name" placeholder="Name" className="form-control" onChange={handleChange} />
				</div>
				<button type="submit" className="btn btn-primary m-lg-2">Submit</button>
			</form>
		</div>
	</div>
}

const mapDispatchToProps = {
	createProduct
}

const connector = connect(null, mapDispatchToProps);

export const ProductForm = connector(ConnectedProductForm);
