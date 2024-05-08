import { useEffect, useState } from 'react';

import Home from './Home.jsx';
import CustomerExistingPlans from './CustomerExistingPlans.jsx';
import CustomerPlanChange from './CustomerPlanChange.jsx';

export default function CustomerPage({loginUser, server}) {
	const [plans, setPlans] = useState([]);
	const [planChange, setPlanChange] = useState(false);

	const fetchCustomerPlansURL = `${server}/cms/getplans/`;

	useEffect(() => {
		(async () => {
		  const rawResponse = await fetch(fetchCustomerPlansURL, {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({user_id: loginUser.id})
		  });
		  const response = await rawResponse.json();
		  setPlans(response);
		})();
	}, []);

	return (
		<div>
			<h3>Welcome {loginUser.name}</h3>
			{plans.length ? <CustomerExistingPlans plans={plans} setPlanChange={setPlanChange}/> : <Home loginUser={loginUser} server={server} setUserPlans={setPlans}/>}
			{planChange ? <CustomerPlanChange server={server} loginUser={loginUser} setPlans={setPlans} setPlanChange={setPlanChange}/> : ''}
		</div>
	);
}