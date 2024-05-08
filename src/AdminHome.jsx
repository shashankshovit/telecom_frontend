import { useEffect, useState } from 'react';

import Customers from './Customers.jsx';

import './AdminHome.css';

export default function AdminHome() {
	const [customers, setCustomers] = useState([]);
	useEffect(() => {
		(async () => {
			let response = await fetch('http://localhost:8000/cms/list_customers/');
			response = await response.json();
			setCustomers(response);
		})();
	}, []);

	return (
		<div className="admin-home">
			<h3>Customer Management Portal</h3>
			<Customers customers={customers}/>
		</div>
	);
}