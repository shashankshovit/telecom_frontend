import {useEffect, useState} from 'react';

import './Login.css';

export default function Login({setLogin, server}) {
	const [userEmails, setEmails] = useState([]);
	const [loginEmail, setLoginEmail] = useState('');

	const loginURL = `${server}/cms/login/`;

	const handleLoginChange = (e) => {
		setLoginEmail(e.target.value);
	}
	const onButtonClick = async (e) => {
		e.preventDefault();
		(async () => {
		  const rawResponse = await fetch(loginURL, {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({email: loginEmail})
		  });
		  const loginUser = await rawResponse.json();
		  setLogin(loginUser)
		})();

	}

	useEffect(() => {
		(async () => {
			let customers = await fetch('http://localhost:8000/cms/list_customers/');
			customers = await customers.json();
			setEmails(customers.map(cust=>cust.email).join('; '));
		})();
	}, []);
	return (
		<div className="login">
			<div>Use any of the below emails to login</div>
			<div>{userEmails}</div>
			<h3>Login</h3>
			<div><input type="text" placeholder="Login email" onChange={handleLoginChange} value={loginEmail} /></div>
			<div><button onClick={onButtonClick}>Login</button></div>

		</div>
	);
}