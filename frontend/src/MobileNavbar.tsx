
// import { Button, Collapse } from "react-bootstrap";
// import { RiMenu3Line } from "react-icons/ri";
// import { FiX } from "react-icons/fi";

// const MobileNavbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="mobile-toggle">
//         <Button variant="link" onClick={toggleNavbar}>
//           {isOpen ? <FiX /> : <RiMenu3Line />}
//         </Button>
//       </div>
//       <Collapse in={isOpen}>
//         <div className="mobile-menu">
//           <Button variant="link" className="text-decoration-none button">
//             Logga in
//           </Button>
//           <Button variant="link" className="text-decoration-none button">
//             Om
//           </Button>
//           <Button variant="link" className="text-decoration-none button">
//             Kontakt
//           </Button>
//         </div>
//       </Collapse>
//     </>
//   );
// };

import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


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
			<h3>LOGO</h3>
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
