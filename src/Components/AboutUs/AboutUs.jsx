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
                <div>
                    <div className="ProgressReportContainer">
                        <h1></h1>
                        <div className="paragraph-container">
                            <div className="LeftSide">
                                <div className="SmallBoxes">
                                    <div className="contentBox">
                                        <div>
                                            <h1 className="commonNumber">5+</h1>
                                            <h4 className="commonHeading">Profestional App Designs</h4>
                                            <p>Explore over five top-tier, expertly crafted app designs.</p>
                                        </div>
                                    </div>
                                    <div className="contentBox">
                                        <div>
                                            <img src={figma} alt="" style={{ width: "65px", }} />
                                            <h1 className="commonHeading">Figma file included</h1>
                                            <p>Send Your Project on ...Email.com</p>
                                        </div>
                                        {/* <p></p> */}
                                    </div>
                                </div>
                                <div className="leftSideBottom" style={{ position: "relative" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", }}>
                                        <div>
                                            <h1 className="commonNumber">50+</h1>
                                            <h4 className="commonHeading">Unique Landing pages</h4>
                                        </div>
                                        <img src={CardInside} alt="" style={{ width: "40%", position: "absolute", bottom: "0px", right: "20px" }} />
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="rightSide">
                                {/* <img src={fas} alt="" style={{width:"100%"}} /> */}
                            </div>
                        </div>
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
