import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function header() {
	return (
		<>
			<div className="containerOfHeader">
				<div className="row">
					<div className="col">
						<Link to="/">
							<h1>Security Zines</h1>
						</Link>
						<p className="headerPara">
							Simple explanations for security topics by{" "}
							<a href="https://twitter.com/sec_r0" target="_blank">
								Rohit
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
