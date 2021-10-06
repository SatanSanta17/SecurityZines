import React from "react";
import "./footer.css";
import Emailjs from "emailjs-com";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function footer() {
	function sendEmail(e) {
		e.preventDefault();
		Emailjs.sendForm(
			"service_erot05e",
			"template_0vl14g8",
			e.target,
			"user_PaZ6j2hlg54FjfpZ85fII"
		)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="layer1">
			<div className="layer2">
				<h3 className="headFoot">Subscribe for weekly comics</h3>
				<p className="example">
					No Spams, just a single page comics in your inbox weekly. Like{" "}
					<a href="https://securityzines.com/flyers/rfi.html" target="_blank">
						this
					</a>{" "}
					one.
				</p>
				<form className="form" onSubmit={sendEmail}>
					<input
						type="text"
						id="email"
						placeholder="Your Email"
						name="user_email"
					/>
					<a href="https://www.getrevue.co/profile/rohitsehgal/add_subscriber">
						<input className="subButton" type="submit" value="subscribe" />
					</a>
				</form>
			</div>
			<div className="icons">
				<a href="https://securityzines.com/">
					<FaFacebookF className="icon" />
				</a>
				<a href="https://twitter.com/sec_r0">
					<BsTwitter className="icon" />
				</a>
				<a href="https://www.instagram.com/securityzines/">
					<AiFillInstagram className="icon" />
				</a>
			</div>
			<p className="theEnd">
				Rohit Sehgal, SecurityZines © 2021, All Rights Reserved.
			</p>
		</div>
	);
}
