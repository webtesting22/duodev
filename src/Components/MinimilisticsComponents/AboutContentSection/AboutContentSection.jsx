import React, { useRef, useEffect, useState } from "react";
import "./AboutContentSection.css"; // Import CSS file for animation
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutContentSection = () => {
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
            <div className="leftRightPaddingForSection" ref={sectionRef}>
                <div className="expertiseHeading">
                    <div>
                        <h1 className={`${isVisible ? "fadeDownAnimation heading-style" : "heading-style"}`}
                        >We are development experts on <br /> all technologies & platforms</h1>
                    </div>
                    <div className="btn-container-flex">
                        <button className={`${isVisible ? "btn-style-border fadeDownAnimation" : ""}`}>Get&nbsp;Started</button>
                        <button className={`${isVisible ? "btn-style-transparent fadeDownAnimation" : ""}`}>Click to give me better idea</button>
                    </div>
                </div>
                <div className="small-padding"></div>
                <div className="small-padding"></div>
                {/* <div className="small-padding"></div> */}
                <div>
                    <div className="Main-work-showcase-home">
                        <div className="left-side-container">
                            <h4 className="subheadings">Web Development</h4>
                        </div>
                        <div className="right-side-container">
                            <h4 className="subheadings">App Development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutContentSection;
