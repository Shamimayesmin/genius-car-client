import React from 'react';

const ProductCard = ({product}) => {
    const {img,title,price} = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl mt-12">
			<figure>
				<img className="p-6 rounded-lg" src={img} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="text-2xl text-orange-600 font-semibold">price: ${price}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
    );
};

export default ProductCard;