import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MobileNavbar.css";

function MobileNavbar(): JSX.Element {
	const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle(
				"responsive_nav"
			);
		}
	};

	return (
		<header>
			<div>
				<img
					src="/ux ikoner/Toggles50h/Logo100px.png"
					alt="Logo"
					className="logo-image"
				/>
			</div>
			<nav ref={navRef}>
				<a href="/#">Logga in</a>
				<a href="/#">Om</a>
				<a href="/#">Kontakt</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default MobileNavbar;
