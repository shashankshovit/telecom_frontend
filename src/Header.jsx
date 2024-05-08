import CompanyBanner from './CompanyBanner.jsx';
import Menu from './Menu.jsx';

export default function Header({user, setUser, type, activeMenu, menuItems, onMenuItemClick}) {
	return (
		<div className="header">
			<CompanyBanner/>
			<Menu user={user} setUser={setUser} type={type} activeMenu={activeMenu} menuItems={menuItems} onMenuItemClick={onMenuItemClick}/>
		</div>
	)
}