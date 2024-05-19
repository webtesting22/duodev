import React, { useRef, useEffect, useState } from "react";
import "./AboutContentSection.css"; // Import CSS file for animation
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutContentSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const AppKeyPoints = [
        {
            link: "Transforming Ideas into Powerful Apps",
            keypoint: "Empower your mobile presence with [Your Company Name], where we transform concepts into impactful mobile solutions. From startups to enterprises, our custom-built apps drive engagement and growth across Android and iOS platforms, leveraging cutting-edge technologies and best practices."
        },
        {
            link: "Agile Development and User-Centric Design",
            keypoint: "Centered on user-centric design and robust functionality, [Your Company Name] crafts mobile apps with agile methodologies for rapid delivery and continuous enhancement. From concept to deployment, our end-to-end services encompass UI/UX design, backend development, testing, and maintenance, ensuring seamless adaptation to evolving market demands."
        },
        {
            link: "Expert Mobile App Innovation and Excellence Unleashed",
            keypoint: "Collaborate with [Your Company Name] for unmatched expertise and innovation in mobile app development. Elevate your app's presence in the market with superior user experiences and business-driven outcomes, exceeding expectations every step of the way. Let's craft an app that sets new standards in the industry."
        },
    ]
    const WebKeyPoints = [
        {
            link: "Dynamic Web Development for Business Growth",
            keypoint: "Harnessing state-of-the-art technologies, [Your Company Name] crafts dynamic websites that seamlessly merge form and function. From corporate sites to custom applications, we design tailored solutions for your digital success."
        },
        {
            link: "Collaborative and Scalable Web Solutions",
            keypoint: "With a meticulous and collaborative approach, we tailor each project to meet your business objectives, ensuring measurable outcomes. From scalable architecture to seamless integration, our comprehensive services lay a solid foundation for your online success."
        },
        {
            link: "Expert Web Development: Drive Online Success",
            keypoint: "Elevate your online presence with [Your Company Name], where expertise meets dedication to quality. Experience innovative solutions that attract, retain, and propel growth, making your vision a standout reality in the digital realm."
        }
    ]
    return (
        <>
            <div className="AboutCompanyServices">
                <div style={{ position: "relative" }}>
                    <h1 className="section-heading-style">
                        Features
                    </h1>
                    <div>

                        <div className="parallax" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
                            <div className="box thirdBox"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="MainserviceRow">
                        <div className="imagesAndTitleContainer">
                            <h1>App <br /><span>Dev</span></h1>
                            <div className="absoluteContainerCard parallax" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                                <button className="btn-style-border">Hrllo</button>
                            </div>
                        </div>
                        <div className="keyPointsContainer" >
                            {AppKeyPoints.map((item, index) => (

                                <div key={index} className="content-row">
                                    <div className="SEOFreidlyLinks" >
                                        <h5><i class='bx bx-link'></i> {item.link}</h5>
                                    </div>
                                    <div className="SEOFreidlyContent">
                                        <p>{item.keypoint}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div class="rocket-container">
                        <div class="rocket-path">
                            <hr />
                            <div class="rocket"></div>
                        </div>
                    </div>

                    <div className="MainserviceRow">
                        <div className="imagesAndTitleContainer">
                            <h1>Web <br /><span>Dev</span></h1>
                            <div className="absoluteContainerCard parallax" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                                <button className="btn-style-transparent">Hrllo</button>
                            </div>
                        </div>
                        <div className="keyPointsContainer" >
                            {WebKeyPoints.map((item, index) => (

                                <div key={index} className="content-row">
                                    <div className="SEOFreidlyLinks" >
                                        <h5><i class='bx bx-link'></i>{item.link}</h5>
                                    </div>
                                    <div className="SEOFreidlyContent">
                                        <p>{item.keypoint}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}
export default AboutContentSection;
