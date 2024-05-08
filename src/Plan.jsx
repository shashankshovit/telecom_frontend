import './Plan.css';

export default function Plan({plan: {name, validity, cost, id}, loginUser, server, setUserPlans}) {
	const origPrice = cost + 100;
	const planClass = loginUser ? "plan click" : "plan";
	const planPurchaseURL = `${server}/cms/purchase/`;

	const onPlanClick = (evt) => {
		const yesno = window.confirm(`Are you sure you wish to purchase ${name}?`);
		if(yesno) {
			(async () => {
			  const rawResponse = await fetch(planPurchaseURL, {
			    method: 'POST',
			    headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
			    body: JSON.stringify({user_id: loginUser.id, plan_id: id})
			  });
			  const purchaseResponse = await rawResponse.json();
			  setUserPlans(purchaseResponse);
			})();
		}
	};

	return (
		<div className={planClass} onClick={loginUser ? onPlanClick : undefined}>
			<h3>{name}</h3>
			<div>Validity {validity} days</div>
			<div><strike>Original Price INR {origPrice}</strike></div>
			<div>Only for you <strong>INR {cost}</strong></div>
		</div>
	)
}