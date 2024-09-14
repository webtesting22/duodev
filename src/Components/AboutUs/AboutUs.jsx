import React, { useEffect, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import "./AboutUs.css";
import Headingraphics from "./TopHeadingGraphics.png";
import figma from "./figma.png"
import CardInside from "./CardInside.png"
import SwiperComponent from "../MinimilisticsComponents/SwiperComponent/Swiper";
const AboutUs = () => {
    const imageRef = useRef(null);
    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (imageRef.current) {
                imageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
            if (heading1Ref.current) {
                heading1Ref.current.style.transform = `translateX(${scrollY * 0.2}px)`;
            }
            if (heading2Ref.current) {
                heading2Ref.current.style.transform = `translateX(${-scrollY * 0.2}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navigation />
            <section className="AboutUsContainer">
                <div id="AboutUsSection">
                    <div className="topBar">
                        <img ref={imageRef} src={Headingraphics} alt="Heading Graphics" />
                        <h1 ref={heading1Ref} className="heading heading-left">About Us</h1>
                        <h1 ref={heading2Ref} className="heading heading-right">Meet DuoDev</h1>
                    </div>
                </div>
                
                <div className="medium-padding"></div>
                <div id="SwiperComponent">
                    <SwiperComponent />
                </div>
            </section>
        </>
    );
};

export default AboutUs;
