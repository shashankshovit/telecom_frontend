import {useEffect, useState} from 'react';

export default function CustomerPlanChange({server, loginUser, setPlans, setPlanChange}) {
	const otherPlansURL = `${server}/cms/viewotherplans/`;
	const updatePlanURL = `${server}/cms/modifyplan/`;

	const [otherPlans, setOtherPlans] = useState([]);

	const onPlanChoose = (e, planId, planName) => {
		e.preventDefault();
		const yesno = window.confirm(`Select ${planName} ?`);
		if(yesno) {
			(async () => {
				const rawResponse = await fetch(updatePlanURL, {
					method: 'POST',
					headers: {
				  	'Accept': 'application/json',
				  	'Content-Type': 'application/json'
					},
					body: JSON.stringify({user_id: loginUser.id, plan_id: planId})
			  	});
			const response = await rawResponse.json();
			console.log(response);
			setPlans([response]);
			setPlanChange(false);
			})();
		}
	}

	useEffect(() => {
		(async () => {
		  const rawResponse = await fetch(otherPlansURL, {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({user_id: loginUser.id})
		  });
		  const response = await rawResponse.json();
		  setOtherPlans(response);
		})();
	}, []);

	return (
		<div>
			<br/>
			<div>You can choose from below options:</div>
			<table style={{margin: "auto"}}>
				<tbody>
					{otherPlans.map((p,i) => <tr key={i}><td>{i+1}.</td><td>{p.name}</td><td>INR {p.cost}</td><td>{p.validity} days</td><td><button onClick={(e)=>onPlanChoose(e, p.id, p.name)}>Choose</button></td></tr>)}
				</tbody>
			</table>
		</div>
	);
}