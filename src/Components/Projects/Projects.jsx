import React, { useState } from "react";
import "./Projects.css"
import { Row, Col } from "react-bootstrap";
import DemoImage from "./demoImage.webp"
import Navigation from "../Navigation/Navigation";
import { Button, Modal } from 'antd';
import { Link } from "react-router-dom";
import img1 from "./AMC Projects/amc1.webp"
import img2 from "./AMC Projects/amc2.webp"
import img3 from "./AMC Projects/amc3.webp"
import img4 from "./AMC Projects/amc4.webp"
import img5 from "./AMC Projects/amc5.webp"
import img6 from "./AMC Projects/amc6.webp"
import ClothesLyne1 from "./clothesLyne/ClothesLyne1.webp"
import ClothesLyne2 from "./clothesLyne/ClothesLyne2.webp"
import ClothesLyne3 from "./clothesLyne/ClothesLyne3.webp"
import ClothesLyne4 from "./clothesLyne/ClothesLyne4.webp"
import ClothesLyne5 from "./clothesLyne/ClothesLyne5.webp"
import Expoleads1 from "./Expoleads/Expoleads1.webp"
import Expoleads2 from "./Expoleads/Expoleads2.webp"
import Expoleads3 from "./Expoleads/Expoleads3.webp"
import Expoleads4 from "./Expoleads/Expoleads4.webp"
import Expoleads5 from "./Expoleads/Expoleads5.webp"
import Expoleads6 from "./Expoleads/Expoleads6.webp"
import Crossfit1 from "./Crossfit/Crossfit1.webp"
import Crossfit2 from "./Crossfit/Crossfit2.webp"
import Crossfit3 from "./Crossfit/Crossfit3.webp"
import Crossfit4 from "./Crossfit/Crossfit4.webp"
import Crossfit5 from "./Crossfit/Crossfit5.webp"
import Crossfit6 from "./Crossfit/Crossfit6.webp"
import Crossfit7 from "./Crossfit/Crossfit7.webp"
import Crossfit8 from "./Crossfit/Crossfit8.webp"
import Prepseed1 from "./Prepseed/Prepseed1.webp"
import Prepseed2 from "./Prepseed/Prepseed2.webp"
import Prepseed3 from "./Prepseed/Prepseed3.webp"
import Prepseed4 from "./Prepseed/Prepseed4.webp"
import Prepseed5 from "./Prepseed/Prepseed5.webp"
import Prepseed6 from "./Prepseed/Prepseed6.webp"
import Prepseed7 from "./Prepseed/Prepseed7.webp"
import Bakery1 from "./bakery/Bakery1.jpg"
import Bakery2 from "./bakery/Bakery2.jpg"
import Bakery3 from "./bakery/Bakery3.jpg"
import Bakery4 from "./bakery/Bakery4.jpg"
import Bakery5 from "./bakery/Bakery5.jpg"
import Bakery6 from "./bakery/Bakery6.jpg"
const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const showModal = (item) => {
        setSelectedProject(item);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    const ProjectData = [
        {
            ProjectHeading: "Clotheslyne",
            ProjectDescription: "Say goodbye to laundry day hassles with Clotheslyne, the ultimate laundry service app for busy individuals and businesses. Easily book laundry services, schedule convenient pick-up and drop-off times, and enjoy the ease of online payments—all from your phone. Whether you need a quick wash or full-service care, Clotheslyne ensures your clothes are returned fresh and clean. Designed for both users and laundry service owners, our app makes laundry management simple, efficient, and stress-free.",
            ProjectLink: "https://play.google.com/store/apps/details?id=com.clotheslyne.customer&hl=en-IN",
            projectImage: [
                {
                    img: ClothesLyne1
                },
                {
                    img: ClothesLyne2
                },
                {
                    img: ClothesLyne3
                },
                {
                    img: ClothesLyne4
                },
                {
                    img: ClothesLyne5
                },

            ]
        },
        {
            ProjectHeading: "Expoleads ",
            ProjectDescription: "Expo Lead Connect is a dynamic mobile app revolutionizing event networking and lead management. Traditional business card exchanges with its QR Scanner, effortlessly capturing and organizing data on Name, Email, Address, Phone, and Services. Utilizing OCR Reader technology, the app seamlessly integrates with Firebase to enhance contact management, allowing users to export contact lists to CSV and easily save contacts to their phone book."
            , ProjectLink: "https://play.google.com/store/apps/details?id=expoleads.scan.exhibitor.data"
            , projectImage: [
                {
                    img: Expoleads1
                },
                {
                    img: Expoleads2
                },
                {
                    img: Expoleads3
                },
                {
                    img: Expoleads4
                },
                {
                    img: Expoleads5
                },
                {
                    img: Expoleads6
                },

            ]
        },
        {
            ProjectHeading: "Crossfit",
            ProjectDescription: "Unlock your full fitness potential with CROSSFIT, the ultimate app for gym members and trainers alike. Exclusively designed for trainers to manage their clients, CROSSFIT allows trainers to easily add members, schedule personalized fitness classes, and create tailored diet plans. Members can effortlessly track their workouts, view their class schedules, and access a library of fitness videos, including Zumba and other popular routines. Additionally, the app offers a convenient marketplace for purchasing fitness products like protein powder and supplements, ensuring all your fitness needs are met in one place.",
            ProjectLink: "https://play.google.com/store/apps/details?id=crossfit.personaltrainer.gymtrainer.fitness&hl=en-IN"
            , projectImage: [
                {
                    img: Crossfit1
                },
                {
                    img: Crossfit2
                },
                {
                    img: Crossfit3
                },
                {
                    img: Crossfit4
                },
                {
                    img: Crossfit5
                },
                {
                    img: Crossfit6
                },
                {
                    img: Crossfit7
                },
                {
                    img: Crossfit8
                },

            ]
        },
        {
            ProjectHeading: "Prepseed",
            ProjectDescription: "Prepseed is an all-in-one educational app designed to streamline school management and enhance communication between principals, teachers, students, and parents. Tailored to each user role, Prepseed offers a comprehensive set of modules, including attendance tracking, assignment management, direct messaging, test administration, fee processing, and event coordination. Whether you're overseeing school operations, teaching, learning, or staying informed as a parent, Prepseed provides a seamless, user-friendly experience that keeps everyone connected and organized.",
            ProjectLink: "https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN",
            projectImage: [
                {
                    img: Prepseed1
                },
                {
                    img: Prepseed2
                },
                {
                    img: Prepseed3
                },
                {
                    img: Prepseed4
                },
                {
                    img: Prepseed5
                },
                {
                    img: Prepseed6
                },
                {
                    img: Prepseed7
                },

            ]
        },
        {
            ProjectHeading: "AMC Master",
            ProjectDescription: "Annual Maintenance Contract is a contract or project management app. Users can analyze their contract amount with all estimation of employees, raw material and supplier amount with charts and graphs."
            , ProjectLink: "https://play.google.com/store/apps/details?id=com.mojoomla.amcapp&hl=en_IN&gl=US",
            projectImage: [
                {
                    img: img5
                },
                {
                    img: img1
                },
                {
                    img: img2
                },
                {
                    img: img3
                },
                {
                    img: img4
                },

                {
                    img: img6
                },
            ]
        },
        {
            ProjectHeading: "Bakery Shop",
            ProjectDescription: "Bakery Shop is the perfect app for both bakery owners and customers. As an owner, easily manage your orders with a clear view of pending and completed tasks, ensuring smooth operations. For customers, Bakery Shop offers a delightful browsing experience where you can select your favorite cakes and bakery items from an extensive menu. Once you've made your choices, simply complete your order with secure online payments, and enjoy your treats in no time.",
            // ProjectLink:"https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
            projectImage: [
                {
                    img: Bakery4
                },
                {
                    img: Bakery1
                },
                {
                    img: Bakery3
                },
                {
                    img: Bakery2
                },
                {
                    img: Bakery5
                },
                {
                    img: Bakery6
                },

            ]
        },
        // {
        //     ProjectHeading: "School Management  ",
        //     ProjectDescription: "The School Management App, designed for students and teachers, offers key features including student admissions with detailed profiles, class routines, payment data, teacher listings, subject lists, exam details, and results. The Attendance Module utilizes student QR codes for easy attendance tracking and history review. Enhanced communication is facilitated through Firebase notifications for messages, notices, events, holidays, and a convenient web view for teachers, parents, and support staff, all presented in a cohesive calendar view for seamless module navigation.- Users: - Students, Teacher, Parents & Support Staff."
        //     , ProjectLink: "https://apps.apple.com/in/app/school-management-system-app/id1255762471?platform=iphone"
        // },
        // {
        //     ProjectHeading: "SSA - Driver App",
        //     ProjectDescription: "SSA is a dedicated application for authorized drivers providing transportation services to Gujarat Government Schools through Samgra Shiksha Abhiyan. The app records all trips, allowing drivers to manage student attendance and view their earnings. Integrated with Google Maps and Firebase Authentication, it enables real-time tracking, notifications for overspeed and off-route driving, and features an SOS Call function for emergencies, ensuring a secure and efficient transportation system.",
        //     ProjectLink: "https://play.google.com/store/apps/details?id=in.ssavtsv2&hl=en_US"
        // },




    ]
    return (
        <>
            <Navigation />
            <section className="leftRightPaddingForSection">
                <div className="ProjectsPage">
                    <h1 className="BigHeading">Our <br /> Projects</h1>
                </div>
                <div className="ProjectCardContainer">
                    <div className="ProjectsCards">
                        {ProjectData.map((item, index) => (
                            <div key={index} id="ProjectSingleCard">
                                <div className="IndexNumber">0{index + 1}</div>
                                <div className="HeadingContainer">
                                    <h1>{item.ProjectHeading}</h1>
                                </div>
                                <div className="DescriptionContainer">
                                    {item.ProjectDescription}
                                    <br /><br />
                                    {item.ProjectLink && (
                                        <button className="btn-style-border">
                                            <a href={item.ProjectLink} target="_blank">Download Now</a>
                                        </button>
                                    )}
                                    <button className="btn-style-transparent" onClick={() => showModal(item)}>
                                        More Info
                                    </button>
                                </div>
                            </div>
                        ))}
                        {selectedProject && (
                            <Modal
                                title={selectedProject.ProjectHeading}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                width={800}
                                footer={null}
                            >
                                <br /><br />
                                <p style={{ fontSize: "18px" }}>{selectedProject.ProjectDescription}</p>
                                <br /><br />
                                {selectedProject.projectImage && selectedProject.projectImage.length > 0 && (
                                    <div className="ProjectImagesContainer">
                                        {selectedProject.projectImage.map((image, idx) => (
                                            <img key={idx} src={image.img} alt={`Project ${idx + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                                        ))}
                                    </div>
                                )}
                                <br /><br />
                                {selectedProject.ProjectLink && (
                                    <button className="btn-style-border"><a href={selectedProject.ProjectLink} target="_blank">Download Now</a></button>
                                )}
                            </Modal>
                        )}
                    </div>
                </div>


            </section>
        </>
    )
}
export default Projects;