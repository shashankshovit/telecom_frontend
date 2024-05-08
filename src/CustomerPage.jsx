import {useState} from 'react';

import Login from './Login.jsx';
import CustomerHome from './CustomerHome.jsx';

export default function CustomerPage({server}) {
	const [loginUser, setLogin] = useState(null);
	return (
		<div>
			{ loginUser ? <CustomerHome loginUser={loginUser} server={server} /> : <Login server={server} setLogin={setLogin}/> }
		</div>
	);
}