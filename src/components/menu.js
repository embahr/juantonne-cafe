import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

const NavComponent = React.createClass({
	render: function() {
		return (

			<nav role="navigation">
				<div className="menu__desktop">
					<div className="desktop__links">
                        <NavLink smooth to="#welcome">Home</NavLink>
                        <NavLink smooth to="#info">About</NavLink>
                        <NavLink smooth to="#feature">Feature</NavLink>
                        <NavLink smooth to="#gallery">Our Place</NavLink>
                        <NavLink smooth to="#footer">Contact</NavLink>
					</div>
				</div>
				<div className="menu__mobile">
                    <div className="veggieBurger menu__toggle" onClick={this.veggieBurgerToggle}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
					<div className="mobile__links">
                        <NavLink smooth to="#welcome" onClick={this.veggieBurgerToggle}>Home</NavLink>
                        <NavLink smooth to="#info" onClick={this.veggieBurgerToggle}>About</NavLink>
                        <NavLink smooth to="#feature" onClick={this.veggieBurgerToggle}>Feature</NavLink>
                        <NavLink smooth to="#gallery" onClick={this.veggieBurgerToggle}>Our Place</NavLink>
                        <NavLink smooth to="#footer" onClick={this.veggieBurgerToggle}>Contact</NavLink>
					</div>
				</div>
			</nav>
		);
	},
	veggieBurgerToggle: function() {
		let linksEl = document.querySelector('.mobile__links');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
});

export default NavComponent