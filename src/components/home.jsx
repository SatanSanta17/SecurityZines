import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import HeroSection from "./heroSection";
import Zines from "./zines";
import Flyer from "./flyer";
import ToPrint from "./toPrint";
import Presentation from "./presentation";
import Footer from "./footer";
export default function home() {
	return (
		<div>
			<Route path="/Zines" component={"Zines"} />
			<Route path="/Flyers" component={"Flyer"} />
			<Header />
			<HeroSection />
			<Zines />
			<Flyer />
			<ToPrint />
			<Presentation />
			<Footer />
		</div>
	);
}
