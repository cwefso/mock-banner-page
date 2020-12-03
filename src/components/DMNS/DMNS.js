import React, {useEffect} from "react";
import './DMNS.css'
import { TweenMax, Power2, Back} from 'gsap'


function DMNS() {

	useEffect( () => {

		TweenMax.staggerFrom(
			".dmns-li",
			1,
			{ delay: 0.5, opacity: 0, x: 30, ease: Back.easeOut },
			1
			);
			
			TweenMax.to(".dmns-li:last-child", 1, { delay: 3.5, color: "rgb(164,200,36)" });
			
			TweenMax.to(".dmns-img", 3, { delay: 4.5, left: 0 });
			TweenMax.to(".dmns-li", 1, { delay: 5, opacity: 0 });
			
			TweenMax.from(".dmns-logo", 1, { delay: 6, x: 300 });
			TweenMax.from(".dmns-h2", 1, { delay: 7, x: -300, ease: Power2.easeOut });
			
			TweenMax.from(".dmns-button", 0.5, { delay: 8, scale: 0 });
		}, [])
			
	return (
		<figure className="dmns-figure">
			<div className="dmns-background"></div>
			<img className="dmns-img" src="https://i.imgur.com/eoaPxmj.jpg?1" />
			<img className="dmns-logo" src="https://i.imgur.com/Q9xg1Gp.png?1" />
			<ul className="dmns-ul">
				<li className="dmns-li">Learn</li>
				<li className="dmns-li">Play</li>
				<li className="dmns-li">Explore</li>
			</ul>
			<button className="dmns-button">buy tickets</button>
		</figure>
	);
}

export default DMNS;
