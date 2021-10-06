import React from "react";
import "./toPrint.css";
export default function toPrint() {
	return (
		<div className="Printable">
			<h3 className="headPrint">Some of them, you can print too.</h3>
			<div className="postP">
				<div className="row1P">
					<a
						href="https://securityzines.com/flyers/printable/idor.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/idor.jpg"
							alt=""
						/>
					</a>
					<a
						href="https://securityzines.com/flyers/printable/lfi.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/lfi.jpg"
							alt=""
						/>
					</a>
					<a
						href="https://securityzines.com/flyers/printable/rfi.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/rfi.jpg"
							alt=""
						/>
					</a>
					<a
						href="https://securityzines.com/flyers/printable/ssti.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/ssti.jpg"
							alt=""
						/>
					</a>
				</div>
				<div className="row2P">
					<a
						href="https://securityzines.com/flyers/printable/h2c.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/h2c.jpg"
							alt=""
						/>
					</a>
					<a
						href="https://securityzines.com/flyers/printable/hrs.html"
						target="_blank"
					>
						<img
							className="picP"
							src="https://securityzines.com/assets/img/flyers/printable/hrs.jpg"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
