import React from "react";
import "./HeroHeadingPart.css"
const HeroHeadingPart = () => {
    return (
        <>
            <section className="HeroHeadingSection">
                <h1>Lighting the Way to<br /><span> Innovation</span></h1>
                <br />
                <p>Empowering Businesses with Innovative Digital Solutions, Crafting Excellence for Tomorrow's Challenges.</p>
                <br />
                <div className="HeroHeadingSection-btn-container">
                    <button className="btn-style-border">Get started</button>
                    <button className="btn-style-transparent">Get started</button>
                </div>

            </section>
        </>
    )
}
export default HeroHeadingPart;