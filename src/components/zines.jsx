import React from "react";
import "./zines.css";

export default function zines() {
	return (
		<div>
			<h3 className="headingZine">Zines</h3>
			<div className="posts">
				<div className="row1">
					<a
						href="https://securityzines.com/zines/zines-bundle.html"
						target="_blank"
					>
						<img
							className="pic1"
							src="https://securityzines.com/assets/img/zines/bundle.png"
							alt=""
						/>
						<p className="para">Security Zines Bundle</p>
					</a>
					<a href="https://securityzines.com/zines/docker.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/docker.jpg"
							alt=""
						/>
						<p className="para">Docker Containers</p>
					</a>
					<a
						href="https://securityzines.com/zines/webauth.html"
						target="_blank"
					>
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/webauth.jpg"
							alt=""
						/>
						<p className="para">Authentication and Authorization Methods</p>
					</a>
					<a href="https://securityzines.com/zines/sop.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/sop.jpg"
							alt=""
						/>
						<p className="para">Same Origin Policy</p>
					</a>
				</div>
				<div className="row2">
					<a href="https://securityzines.com/zines/saml.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/saml.jpg"
							alt=""
						/>
						<p className="para">SAML</p>
					</a>
					<a href="https://securityzines.com/zines/csrf.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/csrf.jpg"
							alt=""
						/>
						<p className="para">CSRF</p>
					</a>
					<a href="https://securityzines.com/zines/sqli.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/sqli.jpg"
							alt=""
						/>
						<p className="para">SQLi</p>
					</a>
					<a href="https://securityzines.com/zines/xss.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/xss.jpg"
							alt=""
						/>
						<p className="para">XSS</p>
					</a>
				</div>
				<div className="row3">
					<a
						href="https://securityzines.com/zines/hashing.html"
						target="_blank"
					>
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/hashing.jpg"
							alt=""
						/>
						<p className="para">Hashing</p>
					</a>
					<a href="https://securityzines.com/zines/http.html" target="_blank">
						<img
							className="pic"
							src="https://securityzines.com/assets/img/zines/http.jpg"
							alt=""
						/>
						<p className="para">HTTP</p>
					</a>
				</div>
			</div>
		</div>
	);
}
