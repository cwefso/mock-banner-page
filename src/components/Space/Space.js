import React, { useEffect } from "react";
import "./Space.css";
import { gsap, Back } from "gsap";

function Space() {
	useEffect(() => {
		/*BANNER ANIMATION SCRIPT */

		gsap.to(".space-img", 10, { delay: 0.5, y: -30 });

		gsap.from(".space-h1", 1, {
			delay: 0.5,
			scale: 0.01,
			yoyo: true,
			ease: "power1.inOut",
		});

		gsap.from(
			".space-li",
			0.5,
			{
				delay: 1.5,
				opacity: 0,
				y: -30,
				ease: Back.easeOut,
				stagger: {
					amount: 0.5,
				},
			},
			1
		);

		gsap.to([".space-h1", ".space-li"], 1, { delay: 3, opacity: 0 });

		gsap.from(".space-h2", 1, { delay: 4.5, y: -100, opacity: 0 });

		gsap.to(".space-h2", 1, { delay: 6.5, opacity: 0 });

		gsap.to(".space-img-container", 1, { delay: 7.5, opacity: 0.9 });

		gsap.from(".space-logo", 1, { delay: 7.5, opacity: 0 });

		gsap.to(".space-logo", 1, { delay: 8.5, x: -200 });

		gsap.from(".space-button", 1, { delay: 9.5, scale: 0 });
	}, []);

	return (
		<figure className="space-figure">
			<img className="space-img" src="https://i.imgur.com/iiH8XIK.jpg?2" />
			<div className="space-main">
				<h1 className="space-h1">SPACE ODYSSEY</h1>
				<ul className="space-ul">
					<li className="space-li">2</li>
					<li className="space-li">.</li>
					<li className="space-li">0</li>
				</ul>
				<h2 className="space-h2">11/13/20</h2>
				<div className="space-img-container">
					<img className="space-logo" src="https://i.imgur.com/Q9xg1Gp.png?1" />
					<button className="space-button">buy tickets</button>
				</div>
			</div>
		</figure>
	);
}

export default Space;
