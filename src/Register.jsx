import { useState } from 'react';

import './Register.css';

export default function Register({server}) {
	const registerURL = `${server}/cms/register/`;

	const [name, setName] = useState('');
	const [mob, setMob] = useState('');
	const [email, setEmail] = useState('');
	const [dob, setDob] = useState('');
	const [aadhaar, setAadhaar] = useState('');

	const handleNameChange = (evt) => {setName(evt.target.value)};
	const handleMobChange = (evt) => {setMob(evt.target.value)};
	const handleEmailChange = (evt) => {setEmail(evt.target.value)};
	const handleDobChange = (evt) => {setDob(evt.target.value)};
	const handleAadhaarChange = (evt) => {setAadhaar(evt.target.value)};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		(async () => {
		  const rawResponse = await fetch(registerURL, {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({name, mob, email, dob, aadhaar})
		  });
		  const content = await rawResponse.json();
		})();
	}
	return (
		<div className="register">
			<h3>Customer Registration</h3>
			<form action={registerURL} method="post" encType="multipart/form-data">
				<table>
					<tbody>
						<tr>
							<td>Name:</td><td><input type='text' placeholder="Your full name" onChange={handleNameChange} value={name} /></td>
						</tr>
						<tr>
							<td>Mobile:</td><td><input type='text' placeholder="Your 10 digit mobile number" onChange={handleMobChange} value={mob} /></td>
						</tr>
						<tr>
							<td>Email:</td><td><input type='text' placeholder="Your email address eg yourname@domain.com" onChange={handleEmailChange} value={email} /></td>
						</tr>
						<tr>
							<td>Date of birth:</td><td><input type='text' placeholder="Your date of birth yyyy-mm-dd" onChange={handleDobChange} value={dob} /></td>
						</tr>
						<tr>
							<td>Aadhaar:</td><td><input type='text' placeholder="Your aadhaar number" onChange={handleAadhaarChange} value={aadhaar} /></td>
						</tr>
						<tr>
							<td colSpan='2'><button onClick={handleSubmit}>Submit</button></td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
}