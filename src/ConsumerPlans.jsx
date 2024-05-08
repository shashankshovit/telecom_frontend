import Plan from './Plan.jsx';

import './ConsumerPlans.css';

export default function ConsumerPlans({plans, loginUser, server, setUserPlans}) {
	return (
		<div className="consumer-plans">
			{plans.map((plan) => <Plan key={plan.id} plan={plan} loginUser={loginUser} server={server} setUserPlans={setUserPlans}/>)}
		</div>
	)
}