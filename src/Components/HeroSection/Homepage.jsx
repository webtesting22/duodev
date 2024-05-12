import React, { useRef, useEffect, useState } from "react";
import Checks from "../../../public/Images/BackChecksImage.svg";
import Navigation from "../Navigation/Navigation";
import "./HomePage.css";
import HeroHeadingPart from "../MinimilisticsComponents/HeroHeadingPart/HeroHeadingPart";
import "../../index.css";
import { TypeAnimation } from 'react-type-animation';
import AboutContentSection from "../MinimilisticsComponents/AboutContentSection/AboutContentSection";

const HeroSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(sectionRef.current);

        return () => {
            observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <>
            <Navigation />
            <section >
                <div id="Herosection">
                    <div className="back-checks-img">
                        <img src={Checks} alt="" />
                        <h1 ref={sectionRef}>
                            <TypeAnimation
                                sequence={[
                                    'Creative',
                                    1000,
                                    'Productivity',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>

                    <div className="HeroHeading-container">
                        <div className="large-padding"></div>
                        <HeroHeadingPart />
                    </div>
                </div>
            </section>
            <div className="small-padding"></div>
            <section>
                <div className="AboutCompanyParagraph">
                    <div className="paragraph-container" ref={sectionRef}>
                        <p>We're your premier web and app development experts,
                            crafting tailored digital solutions with cutting-edge technology
                            and creative flair. Whether it's a striking website or a seamless mobile app,
                            we excel in exceeding your expectations.
                            <TypeAnimation
                                sequence={[
                                    'With transparent collaboration from concept to launch, we ensure your involvement every step of the way. Trust us to elevate your online presence and drive your success in the digital realm.',
                                    3000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                    </div>
                </div>
            </section>
            <div className="small-padding"></div>
            {/* <hr  style={{margin:"0px 20px"}}/> */}
            <section>
                <div>
                    <AboutContentSection />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
