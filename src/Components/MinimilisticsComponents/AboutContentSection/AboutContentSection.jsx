import React, { useRef, useEffect, useState } from "react";
import "./AboutContentSection.css"; // Import CSS file for animati
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
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

    const videoUrl = "./webdevVideo.mp4";
    const AppKeyPoints = [
        {
            link: "Customized Digital Solutions",
            keypoint: "We believe that every business is unique, and that's why we take a tailored approach to digital development. Our team of expert developers, designers, and strategists work closely with our clients to understand their goals, challenges, and vision. We then craft bespoke digital solutions that meet their specific needs, whether it's a mobile app, website, or e-commerce platform. Our customized approach ensures that our clients get the exact solution they need to succeed in the digital landscape."
        },
        {
            link: "Innovative Technology Expertise",
            keypoint: "We're constantly pushing the boundaries of what's possible with technology. Our team of experts stays up-to-date with the latest trends, tools, and platforms, ensuring that our clients benefit from the most innovative and effective solutions. From AI and machine learning to blockchain and IoT, we're always exploring new ways to leverage technology to drive business growth. Our expertise spans multiple areas, including mobile app development, web development, and digital marketing."
        },
        {
            link: "Collaborative Partnership Approach",
            keypoint: "We believe that the best solutions come from working together. That's why we take a collaborative approach to every project, working closely with our clients to understand their needs, goals, and vision. Our team is dedicated to delivering exceptional results, and we're committed to being a trusted partner every step of the way. We believe that transparency, communication, and trust are essential to a successful partnership, and we strive to build long-term relationships with our clients."
        },
    ]
    const WebKeyPoints = [
        {
            link: "Pioneering Web Architecture",
            keypoint: "We design and develop websites that are the epitome of modern web architecture. By leveraging the latest advancements in Progressive Web Apps (PWAs), Single-Page Applications (SPAs), and Headless CMS, we create fast, secure, and scalable online platforms that provide an unparalleled user experience. Our expertise in responsive design and mobile-first development ensures that your website is optimized for any device, anywhere."
        },
        {
            link: "Intelligent Digital Storytelling",
            keypoint: "We believe that every brand has a unique story to tell. Our team of expert UX/UI designers, content strategists, and front-end developers work in tandem to craft compelling digital narratives that resonate with your target audience. By harnessing the power of interactive design, micro-interactions, and immersive storytelling, we bring your brand to life, fostering emotional connections and driving engagement."
        },
        {
            link: "Data-Driven Optimization and Insights",
            keypoint: "In today's data-driven landscape, making informed decisions is crucial. Our team of data analysts and SEO specialists leverage Google Analytics, A/B testing, and machine learning algorithms to provide actionable insights that optimize your website's performance. By identifying areas of improvement and opportunities for growth, we help you refine your online strategy, driving ROI, improving customer satisfaction, and increasing conversion rates."
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
                                <ReactPlayer
                                    url={videoUrl}
                                    playing
                                    loop
                                    muted
                                    width="100%"
                                    height="100%"
                                    className="video-player"
                                />
                                <Link to="/projects"><button className="btn-style-border">App Projects</button></Link>
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
                                <Link to="/projects"><button className="btn-style-transparent">Web Projects</button></Link>
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
