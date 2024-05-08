export default function Customers({customers}) {
	const buildCustomerRows = (customers) => {
		return customers.map((cust,i) => (
			<tr key={`customerdetail_${i}`}>
				<td>{cust.name}</td>
				<td>{cust.mob}</td>
				<td>{cust.email}</td>
				<td>{cust.dob}</td>
				<td>{cust.aadhaar}</td>
			</tr>
		));
	}
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Mobile</th>
					<th>Email</th>
					<th>Date of birth</th>
					<th>Aadhaar</th>
				</tr>
			</thead>
			<tbody>
				{buildCustomerRows(customers)}	
			</tbody>
		</table>
			
		
	);
}