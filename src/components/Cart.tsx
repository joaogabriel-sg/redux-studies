import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

export default function Cart() {
	const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

	return (
		<table>
			<thead>
				<tr>
					<th>Produto</th>
					<th>Preço</th>
					<th>Quantidade</th>
					<th>Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{cart.map(({ product, quantity }) => (
					<tr key={product.id}>
						<td>{product.title}</td>
						<td>{product.price.toFixed(2)}</td>
						<td>{quantity}</td>
						<td>{(product.price * quantity).toFixed(2)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
