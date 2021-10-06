import React from "react";
import "./presentation.css";
export default function presentation() {
	return (
		<div>
			<h3 className="headPres">Presentations</h3>
			<div className="postPres">
				<div className="row1Pres">
					<a
						href="https://securityzines.com/ppts/cybersecurityInIndia.html"
						target="_blank"
					>
						<img
							className="picPres"
							src="https://securityzines.com/assets/img/presentations/cybersecurity-in-india.png"
							alt=""
						/>
					</a>
					<a
						href="https://securityzines.com/ppts/defendersGuideToKubernetes.html"
						target="_blank"
					>
						<img
							className="picPres"
							src="https://securityzines.com/assets/img/presentations/defenders-guide-to-k8s.jpg"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
