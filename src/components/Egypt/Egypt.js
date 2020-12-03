import React, { useEffect } from "react";
import "./Egypt.css";
import { gsap, Back } from "gsap";

function Egypt() {
	useEffect(() => {
		/*BANNER ANIMATION SCRIPT */
		gsap.to(".egypt-background", 15, { delay: 0.5, y: -100 });

		gsap.from(".egypt-li", {
			delay: 1.5,
			opacity: 0,
			ease: Back.easeOut,
			stagger: {
				amount: 2.5,
			},
		});

		gsap.to(".egypt-li", 1.1, { delay: 6, opacity: 0 });

		gsap.from(".egypt-sarc", 1, { delay: 7, opacity: 0 });

		gsap.from(".egypt-text", 1, { delay: 7.5, opacity: 0 });

		gsap.from(".egypt-button", 1, { delay: 9, scale: 0 });
	}, []);

	return (
		<figure className="egypt-figure">
			<img
				className="egypt-background"
				src="https://i.imgur.com/RWA7e5U.jpg?1"
			/>
			<img className="egypt-pyramids" src="https://i.imgur.com/Q4UHzSJ.png?1" />
			<img className="egypt-sarc" src="https://i.imgur.com/c8Pc1iz.jpg?1" />
			<div className="egypt-main">
				<ul className="egypt-ul">
					<li className="egypt-li">Discover</li>
					<li className="egypt-li">Ancient</li>
					<li className="egypt-li">Mysteries</li>
				</ul>
				<div className="egypt-text">
					<h2 className="egypt-h2">Egyptian</h2>
					<h2 className="egypt-h2">Mummies</h2>
					<h2 className="egypt-h2">at</h2>
					<h2 className="egypt-h2">DMNS</h2>
				</div>
				<img className="egypt-logo" src="https://i.imgur.com/G7sxEOn.png?1" />
				<button className="egypt-button">buy tickets</button>
			</div>
		</figure>
	);
}

export default Egypt;
