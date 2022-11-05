import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {img, price, title,_id} = service;

	return (
		<div className="card card-compact w-96 bg-base-100 shadow-2xl mt-12">
			<figure>
				<img className="p-6 rounded-lg" src={img} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="text-2xl text-orange-600 font-semibold">price: ${price}</p>
				<div className="card-actions justify-end">
					<Link to={`/checkout/${_id}`}>
						<button className="btn btn-primary">Checkout</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
