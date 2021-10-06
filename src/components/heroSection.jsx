import React from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";

export default function heroSection() {
	return (
		<div>
			<div className="aboutZines">
				<p className="heroPara">
					<strong>
						<b>
							<u>SecurityZines</u>
						</b>
					</strong>{" "}
					are new way of learning security concepts, check the collection of
					Zines down below. You can get them all in a bundle or individually.
					But why should you read it ? Because, its proven that graphics has
					more persistent memory than text.
				</p>
			</div>
			<div className="cardContainer">
				<div className="upcoming">
					<h3 className="cardHeading">Upcoming</h3>
					<a href="https://securityzines.com/books/BurpPluginDev.html">
						<img
							className="burp"
							src="https://securityzines.com/assets/img/books/burp/BurpDevTwitterPost.png"
						/>
					</a>
				</div>
				<div className="newLaunch">
					<h3 className="cardHeading">New Launch !!</h3>
					<div className="launchPics">
						{/* <a href="/Zines">
							<img
								className="docker"
								src="https://securityzines.com/assets/img/zines/docker.jpg"
							/>
						</a>
						<a href="/Flyers">
							<img
								className="idor"
								src="https://securityzines.com/assets/img/flyers/printable/idor.jpg"
							/>
						</a> */}
						<Link to="/Zines">
							<img
								className="docker"
								src="https://securityzines.com/assets/img/zines/docker.jpg"
							/>
						</Link>
						<Link to="/Flyers">
							<img
								className="idor"
								src="https://securityzines.com/assets/img/flyers/printable/idor.jpg"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
