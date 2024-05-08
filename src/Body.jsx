import Home from './Home.jsx';
import CustomerPage from './CustomerPage.jsx';
import AdminHome from './AdminHome.jsx';
import Register from './Register.jsx';

export default function Body({activeMenu, server}) {
	// "Home", "Register", "Admin Login", "Customer Login"
	let Content = '';
	switch(activeMenu) {
		case "Home":
			Content = Home; break;
		case "Customer Login":
			Content = CustomerPage; break;
		case "Admin Login":
			Content = AdminHome; break;
		case "Register":
			Content = Register; break;
		default:
			Content = Home;
	}
	return (
		<div className="body">
			<Content server={server}/>
		</div>
	)
}