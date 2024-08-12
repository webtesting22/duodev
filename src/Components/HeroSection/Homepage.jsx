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
                                    'Imagine',
                                    1000,
                                    'Engineer',
                                    1000,
                                    'Elevate',
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
                        <p>At [Company Name], we empower businesses to thrive in the digital age. As a leading provider of innovative app and
                            web development solutions, we harness the power of technology to drive growth, improve efficiency, and enhance customer
                            experiences. With a team of expert developers, designers, and strategists, we craft bespoke digital products that meet the
                            unique needs of our clients. From conceptualization to deployment, we deliver end-to-end solutions that are tailored to drive
                            real results. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your
                            digital presence, we partner with you to bring your vision to life.
                            <TypeAnimation
                                sequence={[
                                    'With a passion for innovation and a commitment to excellence, we help businesses like yours succeed in an ever-evolving digital landscape.',
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
