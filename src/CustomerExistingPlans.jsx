export default function CustomerPage({plans, setPlanChange}) {
	const onModifyClick = (evt) => {
		evt.preventDefault();
		setPlanChange(true);
	}
	return (
		<div>
			<div>You have following plans</div> 
			<table style={{margin: "auto"}}>
				<tbody>
					{plans.map((p,i) => <tr key={i}><td>{i+1}.</td><td>{p.name}</td><td>INR {p.cost}</td><td>{p.validity} days</td><td><button onClick={onModifyClick}>Modify</button></td></tr>)}
				</tbody>
			</table>
		</div>
	);
}