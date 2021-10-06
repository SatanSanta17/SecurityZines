import React from "react";
import "./flyer.css";

export default function flyers() {
	return (
		<div>
			<h3 className="headFlyer">Flyers</h3>
			<div className="postFlyer">
				<div className="row1F">
					<a href="https://securityzines.com/flyers/idor.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/downloads/idor.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/lfi.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/downloads/lfi-M.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/rfi.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/downloads/rfi-S.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/h2c.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/downloads/h2c-S.jpg"
							alt=""
						/>
					</a>
				</div>
				<div className="row2F">
					<a href="https://securityzines.com/flyers/hrs.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/hrs.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/ssti.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/ssti.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/redos.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/downloads/ReDoS-S.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/oidc.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/oidc.jpg"
							alt=""
						/>
					</a>
				</div>
				<div className="row3F">
					<a href="https://securityzines.com/flyers/k8s.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/k8s.jpg"
							alt=""
						/>
					</a>
					<a href="https://securityzines.com/flyers/dind.html" target="_blank">
						<img
							className="picF"
							src="https://securityzines.com/assets/img/flyers/dind.jpg"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
