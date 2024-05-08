import { useEffect, useState } from 'react';

import ConsumerPlans from './ConsumerPlans.jsx';

export default function Home({loginUser, server, setUserPlans}) {

	const [plans, setPlans] = useState([]);

	useEffect(() => {
		(async () => {
			let response = await fetch('http://localhost:8000/cms/list_plans/');
			response = await response.json();
			// console.log(response);
			setPlans(response);
		})();
	}, []);

	return (
		<div>
			<ConsumerPlans plans={plans} loginUser={loginUser} server={server} setUserPlans={setUserPlans} />
		</div>
	);
}