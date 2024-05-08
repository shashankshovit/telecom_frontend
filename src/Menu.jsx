import './Menu.css';

export default function Menu({user, setUser, type, activeMenu, menuItems, onMenuItemClick}) {
	return (
		<div className="menu">
			{menuItems.map((menuItem, i) => <div key={i} className="menu-item" onClick={()=>onMenuItemClick(menuItem)}>{menuItem}</div>)}
		</div>
	)
}